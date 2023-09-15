import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.page.html',
  styleUrls: ['./home-p.page.scss'],
})
export class HomePPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  seccionP(){
    this.router.navigate(['seccion-p']);
  }
  
}
