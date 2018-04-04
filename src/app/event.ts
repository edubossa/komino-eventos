export class Event {

  email: string;
  phone: string;
  code: number;
  url: string;
  date: Date

  constructor(email: string, phone: string, code: number, url: string, date: Date) {
    this.email = email;
    this.phone = phone;
    this.code = code;
    this.url = url;
    this.date = date;
  }

}
