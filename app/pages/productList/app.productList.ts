import {Page, NavController, NavParams, Platform,} from 'ionic-angular';
import {AppService} from '../../services/app.service';

@Page({
  templateUrl: 'build/pages/productList/app.productList.html',
   providers: [AppService]
})
export class ProductList {
	appservice: AppService; 
	productList: any[]; 

	constructor(appservice: AppService){
 	  	this.appservice = appservice;
    }

    ngOnInit() {
		this.productList = this.appservice.getProductByCategory();
		this.getProductImages = function(product){
			return product.images;
		}
		//console.log(typeof this.getProductImages());
    }

}
