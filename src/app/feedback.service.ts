import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  public saveFeedback(data) : Observable<any> {
     return this.http.post('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/feedback',
     data); 
  }

  public getFeedback() : Observable<any> {
     return this.http.get('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/getfeedback'); 
  }
}
