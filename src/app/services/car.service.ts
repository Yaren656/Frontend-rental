import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) { }

  getCarById(carId:number):Observable<DataResponseModel<CarDto>>{
    let newPath=this.apiUrl + "cars/getbyid"
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath+"?id="+carId);
  }
  getCars():Observable<ListResponseModel<Car>> { 
    let newPath=this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetails():Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>> { 
    let newPath=this.apiUrl + "cars/getbybrand?brandId="+ brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>> { 
    let newPath=this.apiUrl + "cars/getbycolor?colorId="+ colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  doFilter(colorId:number, brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "cars/getcardetailsbycoloridandbrandid?colorId="+ colorId + "&brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  add(car:Car){
    return this.httpClient.post(this.apiUrl+"cars/add", car)
  }
}
