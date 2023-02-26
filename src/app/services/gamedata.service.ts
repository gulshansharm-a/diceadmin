import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamedataService {

  private url = 'http://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }
    getPosts(){

    return this.httpClient.get(this.url);

  }

}
 
 