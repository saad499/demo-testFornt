import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../models/Page.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!:number;
  product!:Product;
  products!:Array<Product>;
  page: number = 0;
  size: number = 10;
  totalPages!: number;

  constructor(private productService:ProductService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute){}

  updateProductFormGroup!: FormGroup;

  /*
  order_Id:number;
    product_name:string;
    quantity_order:number;
    price_each:number;
    order_date:string;
    purchase_address:string;
   */

  ngOnInit(): void {
    this.updateProductFormGroup = this.formBuilder.group({
      product_name:this.formBuilder.control("",[Validators.required]),
      quantity_order:this.formBuilder.control("",[Validators.required]),
      price_each:this.formBuilder.control("",[Validators.required]),
      order_date:this.formBuilder.control("",[Validators.required]),
      purchase_address:this.formBuilder.control("",[Validators.required]),
    })
    
    this.getProduct();

    this.productService.getProduct(this.page,this.size)
    .subscribe((page:Page<Product>)=>{
      this.products = page.content;
      this.totalPages = page.totalPages;
    })
  }

  getProduct(){
    this.id = this.route.snapshot.params['id'];

    this.productService.getProducttById(this.id).subscribe({
      next:(data)=>{
        this.product = data;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  onClick(){
    this.productService.updateProduct(this.id,this.product).subscribe({
      next:(data)=>{
        console.log("updated : ",data);
        this.router.navigateByUrl('/data-table');
      },error:(err)=>{
        console.log(err);
      }
    })
  }

}
