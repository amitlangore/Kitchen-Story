import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { prodarray } from "../home/home";

@Injectable({
    providedIn:'root'
})
export class ProductService{

    currentUser="";
    constructor(private toaster:ToastrService,private route:Router){}

    userdetails : any[]=[
        {
            firstname:"Amit",
            lastname:"Langore",
            email:"amit@gmail.com",
            password:"amitlangore"
        }
    ]

    admindetails : any[]=[
        {
            email:"amit@gmail.com",
            password:"amitlangore"
        }
    ]

    private adminresetdetails : any=[
        {
            adminID:1,
            adminEmail:"amit@gmail.com",
            adminPass:"amitlangore"
        }
    ]

    private products:prodarray[]=[
        {
            productID:1,
            productName:"Water Melon",
            productPrice: 40,
            productCategory:"Fruits",
            productQuant: 1,
            productImg: "assets/images/fruits/watermelon.jpg"
        },
        {
            productID:2,
            productName:"Musk Melon",
            productPrice: 50,
            productCategory:"Fruits",
            productQuant: 1,
            productImg: "assets/images/fruits/muskmelon.jpg"
        },
        {
            productID:3,
            productName:"Mango",
            productPrice: 100,
            productCategory:"Fruits",
            productQuant: 1,
            productImg: "assets/images/fruits/mango.jpg"
        },
        {
            productID:4,
            productName:"Guava",
            productPrice: 55,
            productCategory:"Fruits",
            productQuant: 1,
            productImg: "assets/images/fruits/guava.jpg"
        },
        {
            productID:5,
            productName:"Banana",
            productPrice: 45,
            productCategory:"Fruits",
            productQuant: 1,
            productImg: "assets/images/fruits/banana.jpg"
        },
        {
            productID:6,
            productName:"Oranges",
            productPrice: 50,
            productCategory:"Fruits",
            productQuant: 1,
            productImg: "assets/images/fruits/orange.png"
        },
        {
            productID:7,
            productName:"Lady Finger",
            productPrice: 40,
            productCategory:"Vegetables",
            productQuant: 1,
            productImg: "assets/images/vegetables/ladyfinger.png"
        },
        {
            productID:8,
            productName:"Tomato",
            productPrice: 20,
            productCategory:"Vegetables",
            productQuant: 1,
            productImg: "assets/images/vegetables/tomato.jpg"
        },
        {
            productID:9,
            productName:"Onion",
            productPrice: 80,
            productCategory:"Vegetables",
            productQuant: 1,
            productImg: "assets/images/vegetables/onion.png"
        },
        {
            productID:10,
            productName:"Cauli Flower",
            productPrice: 30,
            productCategory:"Vegetables",
            productQuant: 1,
            productImg: "assets/images/vegetables/cauliflower.jpg"
        },
        {
            productID:11,
            productName:"Capsicum",
            productPrice: 25,
            productCategory:"Vegetables",
            productQuant: 1,
            productImg: "assets/images/vegetables/capsicum.jpg"
        },
        {
            productID:12,
            productName:"Carrot",
            productPrice: 45,
            productCategory:"Vegetables",
            productQuant: 1,
            productImg: "assets/images/vegetables/carrot.jpg"
        },

        {
            productID:13,
            productName:"Lays - Tomato Tango",
            productPrice: 20,
            productCategory:"Snacks & Branded Food",
            productQuant: 1,
            productImg: "assets/images/snacks/redlays.jpg"
        },
        {
            productID:14,
            productName:"Lays - Classic salted",
            productPrice: 20,
            productCategory:"Snacks & Branded Food",
            productQuant: 1,
            productImg: "assets/images/snacks/yellowlays.jpg"
        },
        {
            productID:15,
            productName:"Haldiram's Bhujia Sev",
            productPrice: 60,
            productCategory:"Snacks & Branded Food",
            productQuant: 1,
            productImg: "assets/images/snacks/bhujia.jpg"
        },
        {
            productID:16,
            productName:"Nachos",
            productPrice: 40,
            productCategory:"Snacks & Branded Food",
            productQuant: 1,
            productImg: "assets/images/snacks/nachos.jpg"
        },
        {
            productID:17,
            productName:"Britania Cake",
            productPrice: 40,
            productCategory:"Snacks & Branded Food",
            productQuant: 1,
            productImg: "assets/images/snacks/cake.jpg"
        },
        {
            productID:18,
            productName:"Kurkure",
            productPrice: 20,
            productCategory:"Snacks & Branded Food",
            productQuant: 1,
            productImg: "assets/images/snacks/kurkure.jpg"
        },

        {
            productID:19,
            productName:"Thums up",
            productPrice: 95,
            productCategory:"Beverages",
            productQuant: 1,
            productImg: "assets/images/beverages/thumsup.jpg"
        },
        {
            productID:20,
            productName:"Coolberg",
            productPrice: 109,
            productCategory:"Beverages",
            productQuant: 1,
            productImg: "assets/images/beverages/coolberg.png"
        },
        {
            productID:21,
            productName:"Frooti",
            productPrice: 10,
            productCategory:"Beverages",
            productQuant: 1,
            productImg: "assets/images/beverages/frooti.jpg"
        },
        {
            productID:22,
            productName:"Amul Lassi",
            productPrice: 20,
            productCategory:"Beverages",
            productQuant: 1,
            productImg: "assets/images/beverages/lassi.jpg"
        },
        {
            productID:23,
            productName:"Red Bull",
            productPrice: 106,
            productCategory:"Beverages",
            productQuant: 1,
            productImg: "assets/images/beverages/redbull.jpg"
        },
        {
            productID:24,
            productName:"Appy Fizz",
            productPrice: 15,
            productCategory:"Beverages",
            productQuant: 1,
            productImg: "assets/images/beverages/appy.png"
        },

        {
            productID:25,
            productName:"Amul Cheese cubes",
            productPrice: 108,
            productCategory:"Dairy & Bakery",
            productQuant: 1,
            productImg: "assets/images/dairy/cubes.jpg"
        },
        {
            productID:26,
            productName:"Amul Milk",
            productPrice: 22,
            productCategory:"Dairy & Bakery",
            productQuant: 1,
            productImg: "assets/images/dairy/milk.jpg"
        },
        {
            productID:27,
            productName:"Amul Butter",
            productPrice: 220,
            productCategory:"Dairy & Bakery",
            productQuant: 1,
            productImg: "assets/images/dairy/butter.png"
        },
        {
            productID:28,
            productName:"White Bread",
            productPrice: 30,
            productCategory:"Dairy & Bakery",
            productQuant: 1,
            productImg: "assets/images/dairy/whitebread.png"
        },
        {
            productID:29,
            productName:"Brown Bread",
            productPrice: 40,
            productCategory:"Dairy & Bakery",
            productQuant: 1,
            productImg: "assets/images/dairy/brownbread.png"
        },
        {
            productID:30,
            productName:"Toast",
            productPrice: 55,
            productCategory:"Dairy & Bakery",
            productQuant: 1,
            productImg: "assets/images/dairy/Toast.jpg"
        },

        {
            productID:31,
            productName:"KitKat",
            productPrice: 20,
            productCategory:"Chocolates & Candies",
            productQuant: 1,
            productImg: "assets/images/chocolates/kitkat.png"
        },
        {
            productID:32,
            productName:"Munch",
            productPrice: 10,
            productCategory:"Chocolates & Candies",
            productQuant: 1,
            productImg: "assets/images/chocolates/munch.jpg"
        },
        {
            productID:33,
            productName:"Ferrero Rocher",
            productPrice: 500,
            productCategory:"Chocolates & Candies",
            productQuant: 1,
            productImg: "assets/images/chocolates/ferrero.jpg"
        },
        {
            productID:34,
            productName:"Hershey's Kisses",
            productPrice: 120,
            productCategory:"Chocolates & Candies",
            productQuant: 1,
            productImg: "assets/images/chocolates/kisses.jpg"
        },
        {
            productID:35,
            productName:"Cadbury Silk",
            productPrice: 140,
            productCategory:"Chocolates & Candies",
            productQuant: 1,
            productImg: "assets/images/chocolates/silk.jpg"
        },
        {
            productID:36,
            productName:"Toblerone",
            productPrice: 185,
            productCategory:"Chocolates & Candies",
            productQuant: 1,
            productImg: "assets/images/chocolates/toblerone.jpg"
        },
    ]

    deleteProduct(id:number){
        if(window.confirm("Are you sure that you want to delete this product?")){
            const index= this.products.findIndex(
                product => product.productID === id
            )
            if(index >= 0){
                this.products.splice(index,1);
            }
            this.showDelete();
        }
    }

    showDelete(){
        this.toaster.error('Product Deleted','Alert',{timeOut:10000});
      }

    getPoducts():prodarray[]{
        return this.products;
    }

    getProduct(id:number):prodarray{
        const product = this.products.find(
            product => product.productID === id
        )
        return product;
    }

    updateProduct(productInfo:prodarray){
        let oldproduct = this.products.find(x=>x.productID === productInfo.productID);
        oldproduct.productName = productInfo.productName;
        oldproduct.productPrice = productInfo.productPrice;
        oldproduct.productCategory = productInfo.productCategory;
        this.toaster.info('Product Edited Successfully','Information',{timeOut:1000});
        this.route.navigate(['/admin']);
        }

    addProduct(product: prodarray){
        this.products.push(product);
    }
}