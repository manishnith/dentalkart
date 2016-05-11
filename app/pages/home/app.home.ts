import {Page, Slides} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/home/app.home.html'
})
export class GettingStartedPage {

   mySlideOptions = {
    initialSlide: 1,
    loop: true
  };

   constructor() {

  }

}
