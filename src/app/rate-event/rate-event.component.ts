import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-rate-event',
  templateUrl: './rate-event.component.html',
  styleUrls: ['./rate-event.component.css']
})
export class RateEventComponent implements OnInit {

  justClicked : number = 0;

  Hero = {
  	name : 'ITS Incubation', //how do we set this ???
  	comment : '',
  	rating : [0,0,0,0]
	}
  myName(name) {
    this.Hero.rating[name] = this.justClicked;
    console.log(this.Hero);
  }

  getAllInfo() {
  	console.log('fired');

  	console.log(this.Hero);
  	this.rateService.uploadRating(this.Hero).subscribe(
  		(x)=>{
  			console.log(x);
  			console.log('OK');
  		},
  		(x)=>{
  			console.log(x);
  			console.log('try again');
  		}
  	);

  	
  }

  constructor(private rateService: RateService) {
  	this.rateService.myMethod$.subscribe((data) => {
                this.justClicked = data; // And he have data here too!
            }
        );
  }

  ngOnInit() {
  }

}
