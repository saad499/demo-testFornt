import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../models/Page.model';
import { Product } from '../models/Product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProduct(page=0,size=10):Observable<Page<Product>>{
    let params = new HttpParams();
    params = params.append('page',String(page));
    params = params.append('size',String(size));
    return this.httpClient.get<Page<Product>>("http://localhost:8080/product",{params});
  }

  public searchProduct(keyword:string, page=0, size=5):Observable<Page<Product>>{
    let params = new HttpParams();
    params = params.append('keyword',keyword);
    params = params.append('page',String(page));
    params = params.append('size',String(size));
    return this.httpClient.get<Page<Product>>("http://localhost:8080/searchProduct",{params});
  }

  public getProducttById(id:number):Observable<Product>{
    return this.httpClient.get<Product>("http://localhost:8080/product/"+id);
  }

  public updateProduct(id : number, product: Product):Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:8080/product/"+id,product);
  }

  public deleteProduct(id:number):Observable<Object>{
    return this.httpClient.delete<Product>("http://localhost:8080/product/"+id);
  }

  public getAllProduct():Observable<Product>{
    return this.httpClient.get<Product>("http://localhost:8080/allproduct");
  }
}
