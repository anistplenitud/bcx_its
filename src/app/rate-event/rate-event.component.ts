import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-rate-event',
  templateUrl: './rate-event.component.html',
  styleUrls: ['./rate-event.component.css']
})
export class RateEventComponent implements OnInit {

  Hero = {
  	name : '',
  	comment : '',
  	rating : 0
	}

  getAllInfo() {
  	console.log('fired');

  	console.log(this.Hero);

  	
  }

  constructor(private rateService: RateService) {
  	this.rateService.myMethod$.subscribe((data) => {
                this.Hero.rating = data; // And he have data here too!
                console.log(this.Hero.rating)
            }
        );
  }

  ngOnInit() {
  }

}
