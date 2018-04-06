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

  validadeEmail(email: string) : boolean {
    if (email.search("@") == -1) return false;
    if (email.indexOf(".") == -1) return false;
    if (email.length <= 5) return false;
    return true;
  }

  validate() : boolean {
    if (this.event.email == "") {
      this.message = "Campo email obrigatório";
      return false;
    } else if (this.event.phone == "") {
      this.message = "Campo telefone obrigatório";
      return false;
    }else if (!this.validadeEmail(this.event.email)) {
        this.message = "Email inválido";
        return false;  
    } else if (this.event.phone.toString().length <= 10) {
      this.message = "Telefone inválido, acrescente o DDD + o número";
      return false;
    } else {
        this.message = "";
        return true;
    }

  }

  send() : void {
    if (!this.validate()) return;

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
