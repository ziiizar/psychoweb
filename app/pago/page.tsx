'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PaymentForm } from '@/components/PaymentForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PagoPage() {
  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<'form' | 'success' | 'error'>('form');
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentDetails, setPaymentDetails] = useState<any>(null);

  // Obtener parámetros de la URL
  const service = searchParams.get('service') || 'Consulta Psicológica';
  const amount = parseFloat(searchParams.get('amount') || '60');
  const customerName = searchParams.get('name') || '';
  const customerEmail = searchParams.get('email') || '';
  const customerPhone = searchParams.get('phone') || '';

  const customerInfo = {
    name: customerName,
    email: customerEmail,
    phone: customerPhone,
  };

  const handlePaymentSuccess = (paymentIntent: any) => {
    setPaymentDetails(paymentIntent);
    setPaymentStatus('success');
  };

  const handlePaymentError = (error: string) => {
    setErrorMessage(error);
    setPaymentStatus('error');
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">¡Pago Exitoso!</CardTitle>
              <CardDescription>Tu cita ha sido confirmada y pagada</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Detalles del pago:</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-700">Servicio:</span>
                    <span className="font-semibold">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Monto:</span>
                    <span className="font-semibold">{amount}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">ID de pago:</span>
                    <span className="font-mono text-xs">{paymentDetails?.id}</span>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Recibirás un email de confirmación con todos los detalles de tu cita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/">Volver al Inicio</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contacto">Contactar</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Error en el Pago</CardTitle>
              <CardDescription>Ha ocurrido un problema procesando tu pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-700">{errorMessage}</p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  Por favor, intenta nuevamente o contacta con nosotros si el problema persiste.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => {
                      setPaymentStatus('form');
                      setErrorMessage('');
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Intentar Nuevamente
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contacto">Contactar Soporte</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button asChild variant="outline">
            <Link href="/agendar">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Agendar
            </Link>
          </Button>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">Confirmar Pago</CardTitle>
            <CardDescription>
              Completa tu pago para confirmar la cita
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PaymentForm
              amount={amount}
              service={service}
              customerInfo={customerInfo}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </CardContent>
        </Card>

        {/* Información de seguridad */}
        <div className="mt-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2">Pago 100% Seguro</h3>
            <p className="text-sm text-gray-600">
              Utilizamos Stripe para procesar los pagos de forma segura. 
              Tus datos financieros están protegidos con encriptación de nivel bancario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}