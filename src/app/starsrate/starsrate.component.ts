import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starsrate',
  templateUrl: './starsrate.component.html',
  styleUrls: ['./starsrate.component.css']
})
export class StarsrateComponent implements OnInit {

  public Rating : number = 0;

  public setRating(x){
  		this.Rating = x;
  }

  constructor() { }

  ngOnInit() {
  }

}
