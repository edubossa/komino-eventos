import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {RouterModule, Router, ActivatedRoute } from '@angular/router';
import {EventService} from '../event.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  event: Event;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private eventService: EventService
  ) { }

  ngOnInit() {
    this.event = new Event("", "", 0, "", new Date());
  }

  send() : void {
    this.activatedRoute.queryParams.subscribe(params => {
      let url = params['url'];
      let code = params['code'];
      this.event.code = code;
      this.event.url = url;
    });
    this.eventService.saveToDatabase(this.event);
  }

}
