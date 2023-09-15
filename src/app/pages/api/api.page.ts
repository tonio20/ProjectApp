import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  

  constructor(private HttpClient: HttpClient) { }

  ngOnInit() {

    this.HttpClient.get<any>("https://rickandmortyapi.com/api/character?page=2").subscribe(resultado => {
      //console.log(resultado);  
      //console.log(resultado.content);
    })
  }


}
