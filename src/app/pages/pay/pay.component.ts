import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../service/stripe.service';
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
export class PayComponent implements OnInit {
  stripe: Stripe | null = null; 
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string = ''; 

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
      this.error = event.error.message || ''; 
    } else {
      this.error = '';
    }
  }

  async createToken() {
    if (this.stripe) { 
      const { token, error } = await this.stripe.createToken(this.card);
      if (error) {
        this.error = error.message || ''; 
      } else {
        this.error = '';
     
        console.log(token);
      }
    } else {
      this.error = 'Stripe has not been initialized.';
    }
  }
}