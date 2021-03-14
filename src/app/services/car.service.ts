import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44330/api/cars/getall';
  apiUrl2 = "https://localhost:44330/api/cars/getcardetails";
  constructor(private httpClient: HttpClient) { }


  getCars():Observable<ListResponseModel<Car>> { 
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl)
  }

  getCarDetails():Observable<ListResponseModel<CarDto>>{
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl2)
  }
}
