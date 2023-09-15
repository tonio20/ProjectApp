import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.page.html',
  styleUrls: ['./portafolio.page.scss'],
})
export class PortafolioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
