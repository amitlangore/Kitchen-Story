import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/_service/home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pro:ProductService, private toaster:ToastrService,private route:Router) { }

  ngOnInit(): void {
  }
  save(form:NgForm){
    var temp_email=form.value.email;
    var temp_pwd=form.value.password;
    var flag=0;
    for(let i=0;i<this.pro.userdetails.length;i++){
      if(temp_email == this.pro.userdetails[i].email && temp_pwd == this.pro.userdetails[i].password){
        flag=1;
        this.pro.currentUser=this.pro.userdetails[i].firstname + " "+this.pro.userdetails[i].lastname;
        break;
      }
      if(temp_email == this.pro.userdetails[i].email){
        flag=23;
      }
    }
    if(flag==1){
      console.log(this.pro.currentUser);
      this.showSuccess("Logged In Successful");
      this.route.navigate(['/home']);
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
