import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  currentPoll = {
    question : '',
    responses : [] 
  }

  voted = 0;

  constructor(private rateService: RateService) {

      this.rateService.getpoll().subscribe(
        (x)=>{
            this.currentPoll.question = x.statement;
            this.currentPoll.responses = x.options;

        },
        (e)=>{

        });

  }

  public respondToPoll(option) {
    this.voted = 1;
     console.log(option);
  }

  ngOnInit() {
  }




}
