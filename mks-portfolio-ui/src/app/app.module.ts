import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@components/header/header.component';
import { HomeComponent } from '@components/pages/home/home.component';
import { AboutComponent } from '@components/about/about.component';
import { skillsComponent } from '@components/experience/skills.component';
import { ContactComponent } from '@components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { authInterceptor } from '@helpers/api-auth.interceptor';
import { ServiceUnavailableComponent } from '@components/service-unavailable/service-unavailable.component';
import { HotToastModule, provideHotToastConfig } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    skillsComponent,
    ContactComponent,
    ServiceUnavailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HotToastModule.forRoot(),
  ],
  providers: [
    provideHttpClient(
    withInterceptors([authInterceptor])),
  provideHotToastConfig({
    autoClose: true,
    dismissible: true,
    position: 'top-center',
    stacking: 'vertical'
  })],
  bootstrap: [AppComponent]
})
export class AppModule {}
