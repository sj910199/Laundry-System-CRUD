import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [` 
  .hero{
    
    
    background-size: cover;
    background-position:center center;
  }`]
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
