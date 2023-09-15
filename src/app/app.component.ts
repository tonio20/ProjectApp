import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: 'login', icon: 'home' },
    { title: 'Scaner', url: 'scaner', icon: 'scan' },
    { title: 'Cerrar sesion', url: 'cerrar-sesion', icon: 'lock-closed' },
    { title: 'api', url: 'api', icon: 'lock-closed' },

  ];
  public labels = ['Mesa de ayuda'];
  constructor() {}
}
