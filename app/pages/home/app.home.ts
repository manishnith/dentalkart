import {Modal, Slides, NavController, Page, ViewController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/app.home.html'
})
export class GettingStartedPage {

   mySlideOptions = {
    initialSlide: 1,
    loop: true
  };
nav: NavController;
  constructor(nav: NavController){
    this.nav = nav;
  }
	
  showModal() {
    let modal = Modal.create(MyModal);
    this.nav.present(modal)
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