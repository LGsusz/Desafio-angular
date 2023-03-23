import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Login } from './interfaceLogin';

@Component({
  selector: "app-login",
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
 
  constructor(private Loginservice : LoginService) { }

  formularioContacto = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required])

  });

  ngOnInit(): void {
  }

  login( )
  {
    const login: Login ={
      email: this.email ,
      pass: this.password
    }

    console.log("objeto del login ??: ", login);

    
      try {
        let respuesta = this.Loginservice.login(login)
        console.log("datos de respuesta?: ", respuesta)
        }
       catch (error) {
        console.error(error);
      }
  }
}
