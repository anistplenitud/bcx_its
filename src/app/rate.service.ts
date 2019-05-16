import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const httpOptions = {
		headers: new HttpHeaders({ 'Content-Type':'application/json' })
	};

@Injectable({
  providedIn: 'root'
})
export class RateService {

	myMethod$: Observable<any>;

    private myMethodSubject = new Subject<any>();

    constructor(private http: HttpClient) {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data) {
        console.log(data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.myMethodSubject.next(data);
    }

    myName(name, value) {
      console.log(name);
      console.log(value);

    }

    public uploadRating(data): Observable<any> {
  	
  	return this.http.post('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/rate',
  	 data);
    }

    public getbutoscore(): Observable<any> {
      return this.http.get('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/toscore');
    }

    public getpoll(): Observable<any> {
      return this.http.get('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/topoll');
    }

    public voteonpoll(data) : Observable<any> {
     return this.http.post('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/vote',
     data); 
    }

}
