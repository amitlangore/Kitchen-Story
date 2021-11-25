import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/_service/home.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username:string;
  constructor(private auth:AuthService,private pro:ProductService,private route:Router, private toaster:ToastrService) { 
    this.auth.cartSubject.subscribe((data)=>{
      this.cartcount = data;
    })
  }

  ngOnInit(): void {
    this.cartcountfunc();
    this.username = this.pro.currentUser;
  }

  cartcount:number=0;

  cartcountfunc(){
    if(localStorage.getItem('localcart') != null){
      var count = JSON.parse(localStorage.getItem('localcart'));
      this.cartcount=count.length;
    }
  }

  onLogout(){
    this.pro.currentUser="";
    this.username="";
    this.toaster.success('Successfully Logged Out','Success',{timeOut:1000});
  }

}
