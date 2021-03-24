import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { DataResponseModel } from '../models/dataResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44330/api/cars/';
  constructor(private httpClient: HttpClient) { }

  getCarById(carId:number):Observable<DataResponseModel<CarDto>>{
    let newPath=this.apiUrl + "getbyid"
    return this.httpClient.get<DataResponseModel<CarDto>>(newPath+"?id="+carId);
  }
  getCars():Observable<ListResponseModel<Car>> { 
    let newPath=this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetails():Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>> { 
    let newPath=this.apiUrl + "getbybrand?brandId="+ brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>> { 
    let newPath=this.apiUrl + "getbycolor?colorId="+ colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  doFilter(colorId:number, brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath=this.apiUrl + "getcardetailsbycoloridandbrandid?colorId="+ colorId + "&brandid=" + brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add", car)
  }

  update(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update", car)
  }
}
