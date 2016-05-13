import {Modal, Slides, NavController, Page} from 'ionic-angular';
import {CartPage} from '../shoppingCartPage/app.cart';


@Page({
  templateUrl: 'build/pages/home/app.home.html'
})
export class Home {

   mySlideOptions = {
    initialSlide: 1,
    loop: true
  };
nav: NavController;
  constructor(nav: NavController){
    this.nav = nav;
  }
	
  showModal() {
    let modal = Modal.create(CartPage);
    this.nav.present(modal)
  }
}


/*@Page({
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
}*/