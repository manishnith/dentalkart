import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {AppService} from '../../services/app.service';
 



@Page({
  templateUrl: 'build/pages/shoppingCartPage/app.cart.html',
   providers: [AppService]
})

export class CartPage {
 
    appservice: AppService; 
    viewCtrl: ViewController;


    constructor(appservice: AppService, viewCtrl: ViewController){
        this.appservice = appservice;
        this.productsInCart = [];
        this.cartTotal = 0;
        this.viewCtrl = viewCtrl;
    }
  
    close() {
        this.viewCtrl.dismiss();
    }

    getCartTotal(){
        let totalPrice = 0;

        this.productsInCart.forEach((product) => {
            if(!product.quantity){
                product.quantity = 0;
            }

            if(!product.price){
                product.price = 0;
            }

            totalPrice += product.price * product.quantity;
          });
        this.cartTotal = totalPrice;

    }

    removeFromCart(product){
        let productIndex = this.productsInCart.indexOf(product);
        if(productIndex) {
            this.productsInCart.splice(productIndex, 1);
        }
        this.getCartTotal();
    }



    ngOnInit() {
        this.productsInCart = this.appservice.getCartItems();
        console.log(this.productsInCart);
        this.getCartTotal();
    }
 
}

@Page({
  templateUrl: 'build/pages/common/cart-header/app.header.cart.html'
})

class MyModal {
    viewCtrl: ViewController;
  constructor(viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
}


