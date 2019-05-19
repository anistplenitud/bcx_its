import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-rate-event',
  templateUrl: './rate-event.component.html',
  styleUrls: ['./rate-event.component.css']
})
export class RateEventComponent implements OnInit {

  justClicked : number = 0;

  status : Number = -1;

  Hero = {
    team : -1,
  	rate : 0,
  	rating : [0,'','','']
	}
  myName(i) {
    this.Hero.rating[i] = this.justClicked;
    this.Hero.rate = this.justClicked;
    console.log(this.Hero);
  }

  getAllInfo() {
  	console.log('fired');

  	console.log(this.Hero);
  	this.rateService.uploadRating(this.Hero).subscribe(
  		(x)=>{
  			console.log(x);
  			console.log('OK');
        this.status = 1;
  		},
  		(x)=>{
  			console.log(x);
  			console.log('try again');
        this.status = 0;
  		}
  	);

  	
  }

  constructor(private rateService: RateService) {
  	this.rateService.myMethod$.subscribe((data) => {
                this.justClicked = data; // And he have data here too!
            }
        );

    this.rateService.getbutoscore().subscribe((data) => {
      this.Hero.team = data.team;
      console.log(data);
    }, 
    (err) => {
      console.log(err);
    });

    setInterval(()=>{

      this.rateService.getbutoscore().subscribe((data) => {
      this.Hero.team = data.team;
    }, 
    (err) => {
      console.log(err);
    });

    }, 200000);
  }

  ngOnInit() {
  }

}
