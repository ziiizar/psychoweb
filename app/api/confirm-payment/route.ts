import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { paymentIntentId } = await request.json();

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment Intent ID requerido' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    return NextResponse.json({
      status: paymentIntent.status,
      paymentMethod: paymentIntent.payment_method,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
    });

  } catch (error: any) {
    console.error('Error confirming payment:', error);
    return NextResponse.json(
      { error: 'Error al confirmar el pago' },
      { status: 500 }
    );
  }
}