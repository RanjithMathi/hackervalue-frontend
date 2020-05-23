import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  // private baseUrl = "https://damp-shelf-29907.herokuapp.com/";
  private baseUrl = "https://hackervalue.herokuapp.com/";
  constructor(private http: HttpClient) { }

  getMethod(url){
    return this.http.get(this.baseUrl+url);
  }

  postMethod(url, model){
    return this.http.post(this.baseUrl+url,model);
  }

}
