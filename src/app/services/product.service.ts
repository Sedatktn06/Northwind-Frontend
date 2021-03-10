import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductPesponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({ //enjekte edilecek servis
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44338/api/products/getall';
  constructor(private httpClient: HttpClient) { }


  getProducts() :Observable<ProductPesponseModel> //Observable<ProductPesponseModel> subscribe olunabilir bir productresponsemodel döneceksin.
  { 
    return this.httpClient.get<ProductPesponseModel>(this.apiUrl)
  } //Gelecek datayı ProductResponseModel ile map ediyoruz.
}


