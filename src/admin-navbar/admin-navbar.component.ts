import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  onlogout(){
    this.toaster.success('Admin Logged Out Successfully','Success',{timeOut:1000});
  }
}
