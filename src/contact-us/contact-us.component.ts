import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{
  constructor(private toaster:ToastrService,private route:Router){}
  onsubmit(){
    this.toaster.success('We will get back to you Shortly','Records Saved',{timeOut:2000});
    this.route.navigate(['/home']);
  }
}
