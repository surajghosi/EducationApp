import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async showToast(toastMessage: string, colour:string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000,
      color: colour,
      position: 'top'
    });
    toast.present();
  }
}
