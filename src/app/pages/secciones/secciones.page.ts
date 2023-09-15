import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  basedatos()
  {this.router.navigate(['basedatos']);
}

  portafolio(){
    this.router.navigate(['portafolio'])
  }

  ingsoftware(){
    this.router.navigate(['ingsoftware'])
  }

}
