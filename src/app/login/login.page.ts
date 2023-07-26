import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../service/authenticate.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages= {
    email: [
      { type: "required", message: "El email es obligatorio"},
      { type: "pattern", message: "Debe poner un email valido"}
    ],
    password: [
      { type: "required", message: "La Contraseña es obligatoria"},
      { type: "minlength", message: "Debe tener min 5 caracteres"},
      { type: "maxlength", message: "Solo puede tener max 10 caracteres"}
    ]
  }
  errorMessage: String = '';


  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage,
    private alertCtrl: AlertController
    ) { 
    this.loginForm = this.formBuilder.group(
      {
      email: new FormControl(
        "",
        Validators.compose(
          [
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
        ]
        )
      ),
      password: new FormControl(
        "",
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10)
          ]
        )
      )
    }
   )
  }

  ngOnInit() {
  }

  loginUser(credentials: any){
    console.log(credentials);
    this.authService.loginUser(credentials).then((res: any) =>{
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true);
      this.storage.set("user_id", res.id)
      this.navCtrl.navigateForward("/menu/home");
    }).catch(err => {
      this.errorMessage = err;
      console.log(this.errorMessage);
      this.presentAlert("Opps", "Error de Login", "Revisa tus credenciales");
    })
  }
  async presentAlert(header: string, subHeader:string, message:string){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
 

  goToRegister(){
    this.navCtrl.navigateForward("/register")
  }

}
