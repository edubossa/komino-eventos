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
  message: string = "";

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private eventService: EventService
  ) { }

  ngOnInit() {
    this.event = new Event("", "", 0, "", new Date());
  }

  validate() : boolean {
    if (this.event.email == "") {
      this.message = "Campo email Obrigatorio";
      return true;
    } else if (this.event.phone == "") {
      this.message = "Campo telefone Obrigatorio";
      return true;
    } else {
        this.message = "";
        return false;
    }

  }

  send() : void {
    if (this.validate()) return;

    this.activatedRoute.queryParams.subscribe(params => {
      let url = params['url'];
      if (url == undefined) {
        this.message = "Nenhuma promoção disponível!";
        return;
      }
      let code = params['code'];
      this.event.code = code;
      this.event.url = url;
      this.eventService.saveToDatabase(this.event);
    });

  }

}
