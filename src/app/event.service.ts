import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Event} from './event';

@Injectable()
export class EventService {

  public response: any;

  constructor(public http: HttpClient) { }

  saveToDatabase(event: Event) : void {

    const req = this.http.post('https://fitnessmobile-12fed.firebaseio.com/promotion.json', event).subscribe(res => {
      console.log(res);
      window.location.href = event.url;
    },
    err => {
      console.log("Error occured");
      });

  }

  getAllEvents() : void {
    this.http.get('https://fitnessmobile-12fed.firebaseio.com/promotion.json').subscribe(data => {
      this.response = data;
    },
      err => {
        console.log("Error occured.")
    });
  }

}
