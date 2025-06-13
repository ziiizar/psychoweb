'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Building, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface PaymentFormProps {
  amount: number;
  service: string;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess: (paymentIntent: any) => void;
  onError: (error: string) => void;
}

function CheckoutForm({ amount, service, customerInfo, onSuccess, onError }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank_transfer'>('card');
  const [clientSecret, setClientSecret] = useState<string>('');

  useEffect(() => {
    // Crear Payment Intent cuando se monta el componente
    createPaymentIntent();
  }, [paymentMethod]);

  const createPaymentIntent = async () => {
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          paymentMethod,
          customerInfo: {
            ...customerInfo,
            service,
          },
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        onError(data.error);
        return;
      }

      setClientSecret(data.clientSecret);
    } catch (error) {
      onError('Error al inicializar el pago');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setIsLoading(true);

    try {
      let result;

      if (paymentMethod === 'card') {
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) {
          onError('Error al procesar la tarjeta');
          setIsLoading(false);
          return;
        }

        result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: customerInfo.name,
              email: customerInfo.email,
              phone: customerInfo.phone,
            },
          },
        });
      } else {
        // Para transferencias bancarias/SEPA
        result = await stripe.confirmSepaDebitPayment(clientSecret, {
          payment_method: {
            sepa_debit: {
              iban: '', // El usuario ingresará su IBAN
            },
            billing_details: {
              name: customerInfo.name,
              email: customerInfo.email,
            },
          },
        });
      }

      if (result.error) {
        onError(result.error.message || 'Error en el pago');
      } else {
        onSuccess(result.paymentIntent);
      }
    } catch (error) {
      onError('Error al procesar el pago');
    } finally {
      setIsLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Selector de método de pago */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Método de pago</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`p-4 border-2 rounded-xl transition-all duration-200 ${
              paymentMethod === 'card'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center mb-2">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <p className="font-semibold text-gray-900">Tarjeta</p>
            <p className="text-sm text-gray-600">Crédito/Débito</p>
          </button>

          <button
            type="button"
            onClick={() => setPaymentMethod('bank_transfer')}
            className={`p-4 border-2 rounded-xl transition-all duration-200 ${
              paymentMethod === 'bank_transfer'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-center mb-2">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <p className="font-semibold text-gray-900">Transferencia</p>
            <p className="text-sm text-gray-600">SEPA/Bancaria</p>
          </button>
        </div>
      </div>

      {/* Formulario de pago */}
      {paymentMethod === 'card' && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Información de la tarjeta
          </label>
          <div className="p-4 border border-gray-300 rounded-lg">
            <CardElement options={cardElementOptions} />
          </div>
        </div>
      )}

      {paymentMethod === 'bank_transfer' && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-blue-800">Transferencia bancaria</p>
              <p className="text-sm text-blue-700 mt-1">
                Se te proporcionarán los datos bancarios para realizar la transferencia. 
                El pago se confirmará una vez recibida la transferencia.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Resumen del pago */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-900">Total a pagar:</span>
          <span className="text-2xl font-bold text-blue-600">{amount}€</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{service}</p>
      </div>

      <Button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700"
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Procesando pago...
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Confirmar pago de {amount}€
          </>
        )}
      </Button>
    </form>
  );
}

export function PaymentForm(props: PaymentFormProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
}