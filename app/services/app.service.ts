import {Injectable} from 'angular2/core';
//import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 
let favorites = [],
    URL = "http://localhost:3000";

 
@Injectable()
export class AppService {
 
    http: Http;
    

    constructor(http: Http) {
        this.http = http;
    }
 
 

    getProductDetails(){
        let result =  {"data":{"id":"2593","sku":"DENTSPLY4021","name":"MAILLEFER K FILE SIZE 40 21mm","short_description":"MAILLEFER K FILE SIZE 40 21mm","description":"","price":"285.0000","special_price":"","product_url":"http:\/\/www.dentalkart.com\/index.php\/maillefer-k-file-size-40-21mm.html"}};
        return result.data;
    }
    getCategoryList(){

    }
    getProductByCategory(){
        let result = {"page_count":8,"data":[{"id":"1984","name":"ADAM PLIER LOCAL","sku":"AdamPlier","description":"","price":"200.0000","special_price":"","product_url":"http://www.dentalkart.com/index.php/adam-plier.html","images":[{"url":"http://www.dentalkart.com/media/placeholderimage.jpg","position":1}],"is_configurable":0,"configurable_options":[]},{"id":"1985","name":"UNIVERSAL PLIER LOCAL","sku":"UniversalPlierlocal","description":"","price":"200.0000","special_price":"","product_url":"http://www.dentalkart.com/index.php/universal-plier-2149.html","images":[{"url":"http://www.dentalkart.com/media/placeholderimage.jpg","position":1}],"is_configurable":0,"configurable_options":[]},{"id":"1877","name":"LIGHT CURE KIT TRANSBOND XT","sku":"Light Cure kit Transbond Xt","description":"","price":"5150.0000","special_price":"","product_url":"http://www.dentalkart.com/index.php/light-cure-kit-transbond-xt.html","images":[{"url":"http://www.dentalkart.com/media/placeholderimage.jpg","position":1}],"is_configurable":0,"configurable_options":[]}],"product_count":3};
        return result.data;
    }
 
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    checkService(pageName){
        console.log(pageName);
    }
 
}

/*
 
    sendData(property) {
        let body = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(favoritesURL, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }

*/