import {Page, NavController, NavParams} from 'ionic-angular';
import {AppService} from '../../services/app.service';
 



@Page({
  templateUrl: 'build/pages/categoryListPage/app.categories.html',
   providers: [AppService]
})

export class CategoryList {
 
    appservice: AppService; 


    constructor(appservice: AppService){
        this.appservice = appservice;
        this.categoryList = [];
    }


    getSubCategory(category){
        if(category.children.length > 0){
            this.categoryList = category.children;
        }
        
    }
  

    ngOnInit() {
        this.categoryList = this.appservice.getCategoryList();
        console.log(this.categoryList);

    }
 
}



