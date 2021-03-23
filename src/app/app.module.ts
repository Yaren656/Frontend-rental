import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {ToastrModule} from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { ImageComponent } from './components/image/image.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BrandSelectoptionComponent } from './components/brand/brand-selectoption/brand-selectoption.component';
import { ColorSelectoptionComponent } from './components/color/color-selectoption/color-selectoption.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { RentcarComponent } from './components/rentcar/rentcar.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandUpdateComponent } from './components/brand/brand-update/brand-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CustomerComponent,
    RentalComponent,
    ImageComponent,
    CardtoComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    BrandSelectoptionComponent,
    ColorSelectoptionComponent,
    CreditcardComponent,
    RentcarComponent,
    CarAddComponent,
    CarUpdateComponent,
    ColorListComponent,
    ColorUpdateComponent,
    BrandListComponent,
    BrandUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
