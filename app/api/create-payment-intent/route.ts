import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = 'eur', paymentMethod, customerInfo } = await request.json();

    if (!amount || amount < 50) {
      return NextResponse.json(
        { error: 'El monto mínimo es 0.50€' },
        { status: 400 }
      );
    }

    // Configuración base del Payment Intent
    const paymentIntentData: any = {
      amount: Math.round(amount * 100), // Stripe usa centavos
      currency,
      metadata: {
        service: customerInfo?.service || 'consulta_psicologica',
        customer_name: customerInfo?.name || '',
        customer_email: customerInfo?.email || '',
      },
    };

    // Configurar métodos de pago según la selección
    if (paymentMethod === 'card') {
      paymentIntentData.payment_method_types = ['card'];
      paymentIntentData.automatic_payment_methods = {
        enabled: true,
      };
    } else if (paymentMethod === 'bank_transfer') {
      // Para transferencias bancarias en España, usamos SEPA
      paymentIntentData.payment_method_types = ['sepa_debit'];
      paymentIntentData.payment_method_options = {
        sepa_debit: {
          mandate_options: {
            // Esto permite débitos únicos sin mandato permanente
          }
        }
      };
    } else {
      // Permitir ambos métodos
      paymentIntentData.payment_method_types = ['card', 'sepa_debit'];
      paymentIntentData.automatic_payment_methods = {
        enabled: true,
      };
    }

    const paymentIntent = await stripe.paymentIntents.create(paymentIntentData);

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });

  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json(
      { error: 'Error al procesar el pago' },
      { status: 500 }
    );
  }
}