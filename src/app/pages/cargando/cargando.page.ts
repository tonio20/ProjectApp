import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.page.html',
  styleUrls: ['./cargando.page.scss'],
})
export class CargandoPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
    this.router.navigate(['login']);
  }

}
