import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { prodarray } from 'src/home/home';
import { ProductService } from 'src/_service/home.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{

  id:number;
  
  product: prodarray ={
    productID:0,
    productName : '',
    productPrice: 0,
    productImg:'',
    productQuant:1,
    productCategory:''
  };

  constructor(private route:Router, private aroute:ActivatedRoute, private pro:ProductService){}

  ngOnInit():void{
    this.id = +this.aroute.snapshot.paramMap.get('id');

    this.product = this.pro.getProduct(this.id);
  }

  save(ProductForm:NgForm){
    console.log(JSON.stringify(ProductForm.value));
    let product : prodarray={
      productID:ProductForm.value.proid,
      productName:ProductForm.value.proname,
      productPrice: ProductForm.value.proprice,
      productCategory:ProductForm.value.procat,
      productImg: ProductForm.value.proimg,
      productQuant:ProductForm.value.proqty,
    }

    this.pro.updateProduct(product);
    
  }
}
