import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-starsrate',
  templateUrl: './starsrate.component.html',
  styleUrls: ['./starsrate.component.css']
})
export class StarsrateComponent implements OnInit {

  public Rating : number = 0;

  public setRating(x){
  		this.Rating = x;
  		this.rateService.myMethod(this.Rating);
  }

  constructor(private rateService: RateService) { }

  ngOnInit() {
  }

}
