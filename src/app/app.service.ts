import { EventEmitter } from '@angular/core';

export class Service{

//should be in environment variable .env
  API_KEY = 'GSZUEIZJN94RM48T316HGD4T48INK3NDRY';
  dataEmiter = new EventEmitter();
  balanceEmiter = new EventEmitter();

  getApi(){
    return this.API_KEY;
  }
}