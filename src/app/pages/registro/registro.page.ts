import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public alertButtons = ['Volver'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Registrar(){
    this.router.navigate(['login'])
  }
  
}
