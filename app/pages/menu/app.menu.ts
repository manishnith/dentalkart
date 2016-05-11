import {Page, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/menu/app.menu.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];

  constructor(private nav: NavController, navParams: NavParams) {

 //   this.links = ['ORTHODONTICS','ENDODONTICS','DISPOSABLES','RESTORATIVE','ORAL SURGERY','PROSTHODONTICS',];


  }

  itemTapped(event, item) {
    this.nav.push(ListPage, {
      item: item
    });
  }
}
