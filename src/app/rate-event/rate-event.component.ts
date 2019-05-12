import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
