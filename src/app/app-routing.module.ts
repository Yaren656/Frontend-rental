import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/cardto/cardto.component';
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
  { path: 'cars/add', component:CarAddComponent },
  { path: 'payment', component:CreditcardComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
