import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {FormsModule} from '@angular/forms';
import { ConvertToSpacePipePipe } from './shared/convert-to-space-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
