import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Home} from './pages/home/app.home';
import {ListPage} from './pages/menu/app.menu';
import {CategoryList} from './pages/categoryListPage/app.categories';
import {ProductList} from './pages/productList/app.productList';
import {ProductPage} from './pages/productPage/app.productPage';
import {CartPage} from './pages/shoppingCartPage/app.cart';
import {AppService} from './services/app.service';

@App({
  templateUrl: 'build/app.html',
  config: {} 
})
class MyApp {
  rootPage: any = Home;
  pages: Array<{title: string, component: any}>

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Menu', component: ListPage },
      { title: 'Category', component: CategoryList },
      { title: 'ProductList', component: ProductList },
      {title: 'ProductPage' , component: ProductPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
