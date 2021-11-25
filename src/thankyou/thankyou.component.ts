import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  total:number=0;
  cartNumber:number = 0;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.CartItemDetails();
    this.removeallitems();
  }
  
  cartdetails:any=[];
  CartItemDetails(){
    if(localStorage.getItem('localcart')){
      this.cartdetails = JSON.parse(localStorage.getItem('localcart'));
    }
  }

  removeallitems(){
    localStorage.removeItem('localcart');
    this.cartdetails = [];
    this.total = 0;
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }
}
