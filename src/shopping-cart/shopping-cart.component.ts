import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../_service/auth.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  constructor(private auth:AuthService,private toaster:ToastrService){}



  ngOnInit(): void{
    this.CartItemDetails();
    this.totalcart();
  }

  cartdetails:any=[];
  CartItemDetails(){
    if(localStorage.getItem('localcart')){
      this.cartdetails = JSON.parse(localStorage.getItem('localcart'));
    }
  }

  incqaunt(id,qnt){
    for(let i=0;i<this.cartdetails.length;i++){
      if(this.cartdetails[i].productID === id){
        if(qnt!=5)
          this.cartdetails[i].productQuant = parseInt(qnt)+1;
      }
    }
    localStorage.setItem('localcart',JSON.stringify(this.cartdetails));
    this.totalcart();
  }

  decqaunt(id,qnt){
    for(let i=0;i<this.cartdetails.length;i++){
      if(this.cartdetails[i].productID === id){
        if(qnt!=1)
          this.cartdetails[i].productQuant = parseInt(qnt)-1;
      }
    }
    localStorage.setItem('localcart',JSON.stringify(this.cartdetails));
    this.totalcart();
  }
  total:number=0;
  totalcart(){
    if(localStorage.getItem('localcart')){
      this.cartdetails = JSON.parse(localStorage.getItem('localcart'));
      this.total = this.cartdetails.reduce(function(acc, val){
        return acc + (val.productPrice * val.productQuant);
      }, 0);
    }
  }
  removeallitems(){
    localStorage.removeItem('localcart');
    this.cartdetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
    this.showAllError();
  }

  removeitem(id){
    console.log(id);
    if(localStorage.getItem('localcart')){
      this.cartdetails = JSON.parse(localStorage.getItem('localcart'));
      for(let i=0;i<this.cartdetails.length;i++){
        if(this.cartdetails[i].productID === id){
          this.cartdetails.splice(i, 1);
          localStorage.setItem('localcart',JSON.stringify(this.cartdetails));
          this.totalcart();
          this.cartNumberFunc();
        }
      }
    }
    this.showSingleError();
  }
  
  cartNumber:number = 0;
    cartNumberFunc(){
        var cartValue = JSON.parse(localStorage.getItem('localcart'));
        this.cartNumber = cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
    }

    showSingleError(){
      this.toaster.error('Item Removed from Cart','Alert',{timeOut:1000});
    }

    showAllError(){
      this.toaster.error('All Items Removed from Cart','Alert',{timeOut:1000});
    }
  
}
