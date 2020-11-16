import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTransactionComponent } from './components/new-transaction/new-transaction.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTransactionComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
