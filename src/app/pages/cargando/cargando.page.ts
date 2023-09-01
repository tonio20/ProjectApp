import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.page.html',
  styleUrls: ['./cargando.page.scss'],
})
export class CargandoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['login']);
  }

}
