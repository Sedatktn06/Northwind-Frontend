import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({ //enjekte edilecek servis
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44338/api/';
  constructor(private httpClient: HttpClient) { }


  getProducts() :Observable<ListResponseModel<Product>> //Observable<ProductPesponseModel> subscribe olunabilir bir productresponsemodel döneceksin.
  { 
    //Bir fonksiyon içinde sabit tanımlama.Sadece tanımlandığı fonksiyonda geçerli.
    let newPath=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  } //Gelecek datayı ProductResponseModel ile map ediyoruz.

  getProductsByCategory(categoryId:number) :Observable<ListResponseModel<Product>> 
  { 
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  add(product:Product){
    let newPath=this.apiUrl+"products/add";
    return this.httpClient.post<ResponseModel>(newPath,product);
  }

}


