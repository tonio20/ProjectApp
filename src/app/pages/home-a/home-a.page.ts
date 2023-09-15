import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.page.html',
  styleUrls: ['./home-a.page.scss'],
})
export class HomeAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  secciones(){
    this.router.navigate(['secciones']);
  }
}
