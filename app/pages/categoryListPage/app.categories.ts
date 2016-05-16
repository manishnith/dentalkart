import {Page, NavController, NavParams} from 'ionic-angular';
import {AppService} from '../../services/app.service';
import {ProductList} from '../productList/app.productList'



@Page({
  templateUrl: 'build/pages/categoryListPage/app.categories.html',
   providers: [AppService]
})

export class CategoryList {
 
    appservice: AppService; 


    constructor(appservice: AppService, nav: NavController){
        this.appservice = appservice;
        this.categoryList = [];
        this.nav = nav;
    }


    getProducts(category){
        console.log(category.category_id);
        this.nav.push(ProductList, {
          category: category.category_id
        });
        
    }
  

    ngOnInit() {
        this.categoryList = this.appservice.getCategoryList();
        console.log(this.categoryList);

    }
 
}



