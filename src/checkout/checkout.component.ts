import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
    this.CartItemDetails();
    this.totalcart();
  }

  cartdetails:any=[];
  CartItemDetails(){
    if(localStorage.getItem('localcart')){
      this.cartdetails = JSON.parse(localStorage.getItem('localcart'));
    }
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

  ShowSuccess(){
    this.toaster.success('Order Placed','Success',{timeOut:1000});
  }
}
