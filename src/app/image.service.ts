import { Injectable } from '@angular/core';
//import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  constructor(private http: HttpClient) { }

  public uploadImage(image): Observable<any> {
  	//debugger;
  	const formData = new FormData();

  	formData.append('image', image);
  	//formData.append('test', "I am here");
  	return this.http.post('http://node-express-env.uehy6s5937.us-east-2.elasticbeanstalk.com/image_upload', formData);
  }
}
