import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../service/authenticate.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      /**{ type: "pattern", message: "Debe poner un email valido" },**/
      { type: "email", message: "Por favor, ingrese un correo electrónico válido." }
    ],
    password: [
      { type: "required", message: "La contraseña es obligatoria" },
      { type: "minlength", message: "La contraseña debe tener min 6 caracteres" }
    ],
    name: [
      { type: "required", message: "El nombre es obligatoria" },
      { type: "minlength", message: "La contraseña debe tener min 2 caracteres" },
      { type: "maxlength", message: "La contraseña debe tener max 25 caracteres" }
    ],
    last_name: [
      { type: "required", message: "El nombre es obligatoria" },
      { type: "minlength", message: "La contraseña debe tener min 2 caracteres" },
      { type: "maxlength", message: "La contraseña debe tener max 25 caracteres" }
    ]
  }

  constructor(
    private formBuilder: FormBuilder, 
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              /**Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$"),**/
              Validators.email
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(30)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(25)
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(25)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.back()
  }

  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).subscribe(res => {
      console.log(res)
      this.navCtrl.navigateBack("/login");
    })
  }
  }


