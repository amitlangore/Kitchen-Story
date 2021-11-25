import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/_service/home.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products:any=[];

  constructor(private prod:ProductService) { }

  ngOnInit(): void {
    this.products=this.prod.getPoducts();
  }

  onDelete(id : number) {
    this.prod.deleteProduct(id);
  }

  

}
