import Stripe from 'stripe';

// Get the Stripe secret key from environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.error('STRIPE_SECRET_KEY environment variable is not set');
  console.error('Please add your Stripe secret key to .env.local file');
  throw new Error('STRIPE_SECRET_KEY is not set. Please check your environment variables.');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

export const PAYMENT_METHODS = {
  CARD: 'card',
  SEPA_DEBIT: 'sepa_debit',
  BANK_TRANSFER: 'customer_balance'
} as const;

export type PaymentMethodType = typeof PAYMENT_METHODS[keyof typeof PAYMENT_METHODS];