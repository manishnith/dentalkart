import {Page, NavController, NavParams} from 'ionic-angular';
import {AppService} from '../../services/app.service';


@Page({
  templateUrl: 'build/pages/productPage/app.productPage.html',
   providers: [AppService]
})


export class ProductPage {
	appservice: AppService; 
	product: Object; 
	//declare the property explicitly (the access defaults to public)
	  
	constructor(appservice: AppService){
 	  	this.appservice = appservice;
    }

    ngOnInit() {
		this.product = this.appservice.getProductDetails();
		console.log(this.product);
	//	this.appservice.getCartItems();
    }
  
}


