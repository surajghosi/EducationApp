import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor( public loadingController: LoadingController) { }
  // Show the loader for infinite time
  showLoader(loadingMessage: string) {
    this.loadingController.create({
      message: loadingMessage
    }).then((res) => {
      res.present();
    });
  }
  
  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });

  }
}
