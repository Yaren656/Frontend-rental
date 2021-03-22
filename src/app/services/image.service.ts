import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = 'https://localhost:44330/api/';
  constructor(private httpClient: HttpClient) { }

  getImages():Observable<ListResponseModel<Image>> {
    return this.httpClient.get<ListResponseModel<Image>>(this.apiUrl+"carimages/getall")
  }

  getImagesByCarid(carId:number):Observable<ListResponseModel<Image>> {
    return this.httpClient.get<ListResponseModel<Image>>(this.apiUrl+"carimages/getbycarid?carid="+carId)
  }
}
