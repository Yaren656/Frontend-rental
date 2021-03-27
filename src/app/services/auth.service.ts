import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44330/api/auth/';
  constructor(private httpClient:HttpClient) {

   }

   login(loginModel:LoginModel){
     return this.httpClient.post<DataResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
   }

   isAuthenticated(){
     if(localStorage.getItem("token")){
       return true;
     }else{
       return false;
     }
   }

   register(registerModel:RegisterModel){
    return this.httpClient.post<DataResponseModel<TokenModel>>(this.apiUrl+"register",registerModel)
  }

}
