import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

	name : string = '' ;
	currentI : string = '';
	futureI : string = '';

	asking = 1;
	errcheck = 0;

	previousFeedback = [];

  constructor(private feedbackService : FeedbackService) {
 	this.feedbackService.getFeedback().subscribe(
 		(x)=>{
 			this.previousFeedback = x;
 		},
 		(x)=>{
 			console.log(x);
 		});
   }

  ngOnInit() {
  }

  nextquestion() {
  	if (this.name && this.currentI) {
  		this.asking = 3;

  	}
  	else if (this.name) {
  		this.asking = 2;
  	}
  	else {
  		this.asking = 1;
  	}
  	
  }

  uploadFeedback() {
  	var data = {
  		name : this.name,
  		currentI : this.currentI,
  		futureI : this.futureI
  	}

  	console.log(this.name);
  	console.log(this.currentI);
  	console.log(this.futureI);

  	if (this.futureI) {
  		this.feedbackService.saveFeedback(data).subscribe(
  			(x)=>{
  				console.log(x);
  			},
  			(x)=>{
  				console.log(x);
  			});

  		this.asking = 0;
  	}

  	
  }

}
