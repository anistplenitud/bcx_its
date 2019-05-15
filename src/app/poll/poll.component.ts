import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  constructor() { }

  currentPoll = {
    question : 'Do you agree that Cloud is the future ?',
    n_responses : 2,
    responses : ['a\n','yes\n', 'no'] 
  }

  ngOnInit() {
  }


}
