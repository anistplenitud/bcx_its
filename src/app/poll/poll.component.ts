import { Component, OnInit } from '@angular/core';
import { RateService } from '../rate.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  currentPoll = {
    id : String,
    question : 'loading',
    data : [{}] 
  }

  voted = 0;

  constructor(private rateService: RateService) {

      this.rateService.getpoll().subscribe(
        (x)=>{
            this.currentPoll.id = x.timestamp;
            this.currentPoll.question = x.statement;
            this.currentPoll.data = x.data;
            
            console.log(x);
        },
        (e)=>{

        });

      setInterval(()=>{
      this.rateService.getpoll().subscribe(
        (x)=>{
            this.currentPoll.id = x.timestamp;
            this.currentPoll.question = x.statement;
            this.currentPoll.data = x.data;
             },
        (e)=>{

        });

    }, 2000);

  }

  public respondToPoll(option) {
    this.voted = 1;
     console.log(option);
     this.rateService.voteonpoll({'timestamp' : this.currentPoll.id,
      'text' : option}).subscribe((x) => {
        console.log(x);
      },
      (e)=> {
        console.log(e);
      })
  }

  unsetVote() {
    this.voted = 0;
  }

  ngOnInit() {
  }




}
