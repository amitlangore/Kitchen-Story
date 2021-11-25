import { Component, OnInit } from '@angular/core';
import { prodarray } from 'src/home/home';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/_service/home.service';
import { addPro } from './add';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  addProduct: prodarray;
  id:number;
  header:string;

  constructor(private route:Router, private aroute:ActivatedRoute, private pro:ProductService, private toaster:ToastrService){}

  addpro = new addPro;

  save(ProductForm:NgForm){
    console.log(JSON.stringify(ProductForm.value));
    let prod : prodarray={
    productID: ProductForm.value.proid,
    productName:ProductForm.value.proname,
    productPrice: ProductForm.value.proprice,
    productCategory:ProductForm.value.procat,
    productImg: ProductForm.value.proimg,
    productQuant:ProductForm.value.proqty,
    }

    this.pro.addProduct(prod);
    this.route.navigate(['/admin']);
    this.toaster.success('Product Added Successfully','Success',{timeOut:1000});
  }


  ngOnInit():void{
    this.id = +this.aroute.snapshot.paramMap.get('id');
  }


}
