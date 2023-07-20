import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage, private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fallo de inicio',
      message: 'Revise sus credenciales sean correctas',
      buttons: ['OK']
    });
    await alert.present();
  }

  loginUser(credentials: any){
    return new Promise((accept, reject) => {
      if (
        credentials.email == "emanuel@pca.com" && 
        credentials.password == "123456789"
      )
      {
        accept("Login exitoso")
      } else{
        reject(this.presentAlert())
      }
    })
  }

  registerUser(userData:any){
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
