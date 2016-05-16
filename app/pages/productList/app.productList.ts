import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import {AppService} from '../../services/app.service';
import {Home} from '../home/app.home';
import {ProductPage} from '../productPage/app.productPage';



@Page({
  templateUrl: 'build/pages/productList/app.productList.html',
   providers: [AppService]
})
export class ProductList {
	appservice: AppService; 
	private nav: NavController;


	constructor(appservice: AppService, nav: NavController , navParams: NavParams){
 	  	this.appservice = appservice;
 	  	this.nav = nav;
 	  	this.productList = [];
 	  	this.navParams = navParams;


    }
    addToCart(product){
      this.appservice.addToCart(product);
    }

  	goToProduct(){
	   this.nav.push(Home);
	}
	getProductDetail(product){
		console.log(product);
		this.nav.push(ProductPage, {
          product : product
        });
	}
    ngOnInit() {
		this.productList = this.appservice.getProductByCategory(this.navParams.data.category);
		this.getProductImages = function(product){
			return product.images;
		}
		console.log(this.navParams.data.category)
		//console.log(typeof this.getProductImages());
    }
  
}
