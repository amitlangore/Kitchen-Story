import { Component, OnInit } from "@angular/core";
import { catarray } from "./home";
import { prodarray } from "./home";
import { ProductService } from "../_service/home.service";
import { AuthService } from '../_service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector:"home-app",
    templateUrl:"./home.component.html",
    styleUrls:["./home.component.css"]
})

export class HomeComponent implements OnInit{
    categoryTitle:string="CATEGORIES";
    productTitle:string="Products";
    _searchTerm: string;
    products:prodarray[]=[];
    searchedProducts:prodarray[];

     constructor(private proservice:ProductService,private auth:AuthService,private toaster:ToastrService){}
    
    get searchTerm():string{
        return this._searchTerm;
    }

    set searchTerm(value:string){
        this._searchTerm=value;
        this.searchedProducts=this.searchTerm?this.searchProduct(this.searchTerm):this.products;
    }

    searchProduct(searchby:string):prodarray[]{
        searchby=searchby.toLocaleLowerCase();
        return this.products.filter((product:prodarray)=>product.productName.toLocaleLowerCase().indexOf(searchby)!== -1);
    }


    categories:catarray[]=[
        {
            categoryID:"C01",
            categoryName:"Fruits",
            categoryImg: "assets/images/Fruits.jpg"
        },
        {
            categoryID:"C02",
            categoryName:"Vegetables",
            categoryImg: "assets/images/vegetables.jpg"
        },
        {
            categoryID:"C03",
            categoryName:"Snacks & Branded Food", 
            categoryImg: "assets/images/snacks.jpg"
        },
        {
            categoryID:"C04",
            categoryName:"Beverages", 
            categoryImg: "assets/images/beverages.png"
        },
        {
            categoryID:"C05",
            categoryName:"Dairy & Bakery", 
            categoryImg: "assets/images/dairy.jpg"
        },
        {
            categoryID:"C06",
            categoryName:"Chocolates & Candies", 
            categoryImg: "assets/images/chocolates.jpg"
        }

    ]

    
    ngOnInit():void{
        this.products=this.proservice.getPoducts();
        this.searchedProducts=this.products;
    }
    cartitems:any=[];

    addtocart(pro){
        let cartdata= localStorage.getItem('localcart');
        if(cartdata == null)
        {
            let storearr:any=[];
            storearr.push(pro);
            localStorage.setItem('localcart',JSON.stringify(storearr));
        }
        else
        {
            var id=pro.productID;
            let i:number = -1;
            this.cartitems=JSON.parse(localStorage.getItem('localcart'));
            
            for(let j=0;j<this.cartitems.length;j++){
                if(parseInt(id) === parseInt(this.cartitems[j].productID)){
                    this.cartitems[j].productQuant=pro.productQuant;
                    i=j;
                    break;
                }
            }
            if(i==-1)
            {
                this.cartitems.push(pro);
                localStorage.setItem('localcart',JSON.stringify(this.cartitems));
            }
            else{
                localStorage.setItem('localcart',JSON.stringify(this.cartitems));
            }
        }
        this.showSuccess();
        this.cartNumberFunc();
    }

    showSuccess(){
        this.toaster.success('Item added to cart','Success',{timeOut:1000});
    }

    cartNumber:number =0;
    cartNumberFunc(){
        var cartValue = JSON.parse(localStorage.getItem('localcart'));
        this.cartNumber = cartValue.length;
        this.auth.cartSubject.next(this.cartNumber);
    }
}
