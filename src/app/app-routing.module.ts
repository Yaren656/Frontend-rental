import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { ColorListComponent } from './components/color/color-list/color-list.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { RentcarComponent } from './components/rentcar/rentcar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/image/:carId', component: CarComponent },
  { path: 'cardetails/:carId', component: CardtoComponent },
  { path: 'rentcar/:carId', component: RentcarComponent },
  { path: 'payment', component:CreditcardComponent },
  { path: 'cars/update', component:CarUpdateComponent },
  { path: 'colors', component:ColorListComponent },
  { path: 'brands', component:BrandListComponent },
  { path: 'colors/add', component:ColorAddComponent },
  { path: 'brands/add', component:BrandAddComponent },
  { path: 'cars/add', component:CarAddComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
