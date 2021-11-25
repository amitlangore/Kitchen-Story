import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent{
  
  user =new User();

  save(userForm:NgForm){
    console.log(JSON.stringify(userForm.value));
  }
  
}
