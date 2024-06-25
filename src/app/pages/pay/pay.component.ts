import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../service/pay.service';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
  Stripe,
} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PaymentComponent implements OnInit {
  stripe: Stripe | null = null; // Inicializado como null
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string = ''; // Inicializado aquí

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  constructor(private stripeService: StripeService) {}

  ngOnInit() {
    this.stripeService.getStripe().then((stripe) => {
      this.stripe = stripe;
      if (this.stripe) {
        const elements = this.stripe.elements();
        this.card = elements.create('card', this.cardOptions);
        this.card.mount('#card-element');
        this.card.addEventListener('change', this.cardHandler);
      }
    });
  }

  onChange(event: any) {
    if (event.error) {
      this.error = event.error.message || ''; // Asignar cadena vacía si message es undefined
    } else {
      this.error = '';
    }
  }

  async createToken() {
    if (this.stripe) { // Verificación nula
      const { token, error } = await this.stripe.createToken(this.card);
      if (error) {
        this.error = error.message || ''; // Asignar cadena vacía si message es undefined
      } else {
        this.error = '';
        // Enviar el token a tu backend para procesar el pago
        console.log(token);
      }
    } else {
      this.error = 'Stripe has not been initialized.';
    }
  }
}