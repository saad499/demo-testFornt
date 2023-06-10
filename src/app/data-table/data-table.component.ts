import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Page } from '../models/Page.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{

  product!:Array<Product>;
  page:number=0;
  size:number=10;
  totalPages!:number;
  id!:number;
  searchProductFormGroup!:FormGroup;

  constructor(private productService:ProductService,private router:Router, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.getProduct();
    this.searchProductFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control("")
    })
  }

  getProduct(){
    this.productService.getProduct(this.page,this.size)
    .subscribe((page:Page<Product>)=>{
      this.product = page.content;
      this.totalPages = page.totalPages;
    })
  }

  searchproduct(){
    let keyword = this.searchProductFormGroup.value.keyword;
    this.productService.searchProduct(keyword,this.page,this.size).subscribe({
      next:(page:Page<Product>)=>{
        this.product = page.content;
        this.totalPages = page.totalPages;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.getProduct();
    })
  }

  updateProduct(id:number){
    this.router.navigate(['update-product',id]);
  }

  nextPage(){
    this.page++;
    this.getProduct();
  }
  
  previousPage(){
    this.page--;
    this.getProduct();
  }

  getPageArray(totalPages : number){
    const pages = [];
    for(let i=0; i<totalPages; i++){
      pages.push(i);
    }
    return pages;
  }

  goToPage(page: number){
    this.page = page;
    this.getProduct();
  }

}
