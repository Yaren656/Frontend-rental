import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardtoService {

  apiUrl = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDto>>{

    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl+"cars/getcardetails")
  }

  getCarDetailsByCarid(carId:number):Observable<ListResponseModel<CarDto>>{
    return this.httpClient.get<ListResponseModel<CarDto>>
    (this.apiUrl+"cars/getcardetailsbycarid?carid="+carId)
  }

}
