import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {FormTemplComponent} from './form-templ/form-templ.component';
import {FormReactComponent} from './form-react/form-react.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    FormTemplComponent,
    FormReactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
