import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { CarComponent } from './components/car/car.component';
import { CardtoComponent } from './components/cardto/cardto.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RentcarComponent } from './components/rentcar/rentcar.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/image/:carId', component: CarComponent },
  { path: 'cardetails/:carId', component: CardtoComponent },
  {
    path: 'rentcar/:carId',
    component: RentcarComponent,
    canActivate: [LoginGuard],
  },
  { path: 'payment', component: CreditcardComponent },
  {
    path: 'cars/update',
    component: CarUpdateComponent,
    canActivate: [LoginGuard],
  },
  { path: 'colors', component: ColorAddComponent , canActivate: [LoginGuard]},
  { path: 'brands', component: BrandAddComponent , canActivate: [LoginGuard]},
  {
    path: 'colors/add',
    component: ColorAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'brands/add',
    component: BrandAddComponent,
    canActivate: [LoginGuard],
  },
  { path: 'cars/add', component: CarAddComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
