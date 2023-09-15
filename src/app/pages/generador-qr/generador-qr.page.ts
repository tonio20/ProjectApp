import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.page.html',
  styleUrls: ['./generador-qr.page.scss'],
})
export class GeneradorQRPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
