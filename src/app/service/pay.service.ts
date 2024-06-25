import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  private stripePromise: Promise<Stripe | null>;

  constructor() {
    this.stripePromise = loadStripe('TU_CLAVE_PUBLICA_DE_STRIPE');
  }

  getStripe() {
    return this.stripePromise;
  }
}