import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';

@NgModule({
  declarations: [
    AppComponent,
    StagiaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [StagiaireComponent]
})
export class AppModule { }
