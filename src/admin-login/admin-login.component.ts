import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/_service/home.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private pro:ProductService, private toaster:ToastrService,private route:Router) { }

  ngOnInit(): void {
  }
  save(form:NgForm){
    var temp_email=form.value.email;
    var temp_pwd=form.value.password;
    var flag=0;
    for(let i=0;i<this.pro.admindetails.length;i++){
      if(temp_email == this.pro.admindetails[i].email && temp_pwd == this.pro.admindetails[i].password){
        flag=1;
        this.pro.currentUser=this.pro.admindetails[i].firstname + " "+this.pro.admindetails[i].lastname;
        break;
      }
      if(temp_email == this.pro.admindetails[i].email){
        flag=23;
      }
    }
    if(flag==1){
      this.showSuccess("Admin Logged In Successful");
      this.route.navigate(['/admin']);
    }
    else if(flag==23){
      this.showError("Incorrect Password");
    }
    else{
      this.showError("User doesnot exist");
    }
    console.log(temp_email,temp_pwd);
  }

  showSuccess(msg){
    this.toaster.success(msg,'Success',{timeOut:1000});
}
showError(msg){
  this.toaster.error(msg,'Error',{timeOut:1000});
}

  

}
