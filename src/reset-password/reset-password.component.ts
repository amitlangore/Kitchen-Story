import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/_service/home.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  id:number;
  

  constructor(private aroute:ActivatedRoute,private pro:ProductService,private toaster:ToastrService,private route:Router) { }

  ngOnInit(): void {
  }

  save(form:NgForm){
    console.log(form.value);
    this.route.navigate(['/adminlogin']);
    this.toaster.info('Admin Password Changed','Alert',{timeOut:2000});
    
  }
}
