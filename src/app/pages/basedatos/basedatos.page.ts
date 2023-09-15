import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basedatos',
  templateUrl: './basedatos.page.html',
  styleUrls: ['./basedatos.page.scss'],
})
export class BasedatosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  scaner(){
    this.router.navigate(['scaner']);
  }
}
