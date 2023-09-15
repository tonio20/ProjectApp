import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = '';
    password: string = '';
    emailError: string = '';
    passwordError: string = '';

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    
  }
  
  login(){
    this.emailError = 'Ingresa El Nombre de Usuario Correctamente';
    this.passwordError = 'Ingresa La Contraseña Correctamente';
    
    if (this.email === 'Alumno' && this.password === 'Alumno123') {
      this.navCtrl.navigateForward('home-a');
    } else if (this.email === 'Profesor' && this.password === 'Profesor12'){
      this.navCtrl.navigateForward('home-p')
    } else {
      console.log('Nombre de Usuario y/o Contraseña Incorrecta');
    }
} 

  registro(){
    this.router.navigate(['registro']);
  }

  restpasword(){
    this.router.navigate(['restpasword']);
  }

}
