import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-home-alum',
  templateUrl: './home-alum.component.html',
  styleUrls: ['./home-alum.component.scss'],
})
export class HomeAlumComponent  implements OnInit {
  
  @Input() titulo!: string;
  @Input() descripcion!: string;
  
  constructor() { }

  ngOnInit() {}

}
