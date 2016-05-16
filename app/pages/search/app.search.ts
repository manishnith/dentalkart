import {Page, NavController, NavParams, ViewController} from 'ionic-angular';
import {AppService} from '../../services/app.service';


@Page({
  templateUrl: 'build/pages/search/app.search.html',
   providers: [AppService]
})


export class SearchPage {
  constructor() {
    this.searchQuery = '';
    this.initializeItems();
    this.filteredItems = [];
  }

  initializeItems() {
    this.items = [
      'Angular 1.x',
      'Angular 2',
      'ReactJS',
      'EmberJS',
      'Meteor',
      'Typescript',
      'Dart',
      'CoffeeScript'
    ];
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.value;

    // if the value is an empty string don't filter the items
    if (q.trim() == '') {
      return;
    }

    this.filteredItems = this.items.filter((v) => {
      if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
}