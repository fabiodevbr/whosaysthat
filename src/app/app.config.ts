import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { NgxStripeModule, provideNgxStripe } from 'ngx-stripe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNgxStripe(), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"whosaysthat-4051c","appId":"1:799589072697:web:da70a80f6e3f98bba072e8","storageBucket":"whosaysthat-4051c.appspot.com","apiKey":"AIzaSyC5iY-yJiKkg1CsHfjb1wYWkHFHauhjEK4","authDomain":"whosaysthat-4051c.firebaseapp.com","messagingSenderId":"799589072697","measurementId":"G-BLZL8KKZT1"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(NgxStripeModule.forRoot('pk_test_51P8rtv1cEz9k0dHSBTuC6TDL0LzK4C2um6xuGx6lubIOxu6MJj66OJqtPJ56sVGKyTEqVq6rGKY5O8pjx0NCHHjc00XHEw1oCK'))]
};
