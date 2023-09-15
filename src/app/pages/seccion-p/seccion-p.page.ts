import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-p',
  templateUrl: './seccion-p.page.html',
  styleUrls: ['./seccion-p.page.scss'],
})
export class SeccionPPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  basedatosP(){
    this.router.navigate(['basedatos-p']);
  }

  ingsoftwareP(){
    this.router.navigate(['ingsoftware-p']);
  }

  portafolioP(){
    this.router.navigate(['portafolio-p']);
  }

}
