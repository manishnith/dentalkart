import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import {AppService} from '../../services/app.service';
import {Home} from '../home/app.home';



@Page({
  templateUrl: 'build/pages/productList/app.productList.html',
   providers: [AppService]
})
export class ProductList {
	appservice: AppService; 
	private nav: NavController;


	constructor(appservice: AppService, nav: NavController){
 	  	this.appservice = appservice;
 	  	this.nav = nav;
 	  	this.productList = [];

    }
    addToCart(product){
      this.appservice.addToCart(product);
    }

  	goToProduct(){
	   this.nav.push(Home);
	}

    ngOnInit() {
		this.productList = this.appservice.getProductByCategory();
		this.getProductImages = function(product){
			return product.images;
		}
		//console.log(typeof this.getProductImages());
    }
  
}
