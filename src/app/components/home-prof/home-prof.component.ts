import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.component.html',
  styleUrls: ['./home-prof.component.scss'],
})
export class HomeProfComponent  implements OnInit {
  
  @Input() mostrarboton: boolean = true;

  @Input() titulo!: string;
  @Input() descripcion!: string;
  
  constructor() { }

  ngOnInit() {}

}
