import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import {
  injectStripe,
  StripeElementsDirective,
  StripeCardComponent,
  StripePaymentElementComponent,
  StripeService
} from 'ngx-stripe';
import {
  StripeElementsOptions,
  StripeCardElementOptions,
  PaymentRequestOptions,
  CreatePaymentMethodData,
  PaymentIntent
} from '@stripe/stripe-js';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-paystripe',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    StripePaymentElementComponent,
    CommonModule,
    StripeElementsDirective,
    StripeCardComponent,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './paystripe.component.html',
  styleUrl: './paystripe.component.scss'
})
export class PaystripeComponent {
  @ViewChild(StripeCardComponent) cardElement!: StripeCardComponent;

  private readonly fb = inject(UntypedFormBuilder);

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  checkoutForm = this.fb.group({
    name: ['', [Validators.required]],
    amount: [1000, [Validators.required, Validators.pattern(/\d+/)]],
  });

  // Replace with your own public key
  stripe = injectStripe('pk_test_51P8rtv1cEz9k0dHSBTuC6TDL0LzK4C2um6xuGx6lubIOxu6MJj66OJqtPJ56sVGKyTEqVq6rGKY5O8pjx0NCHHjc00XHEw1oCK');

  constructor(private http: HttpClient, private stripeService: StripeService) {}

  pay(): void {
    if (this.checkoutForm.valid) {
      this.createPaymentIntent(this.checkoutForm?.get('amount')?.value)
        .pipe(
          switchMap((pi: any) =>
            this.stripeService.confirmCardPayment(pi.client_secret, {
              payment_method: {
                card: this.cardElement.element,
                billing_details: {
                  name: this.checkoutForm?.get('name')?.value,
                },
              },
            })
          )
        )
        .subscribe((result) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
            }
          }
        });
    } else {
      console.log(this.checkoutForm);
    }
  }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `http://localhost:3000/create-payment-intent`,
      { amount }
    );
  }
}
