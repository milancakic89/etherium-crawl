import { EventEmitter } from '@angular/core';

export class Service{

//should be in environment variable .env
  API_KEY = 'GSZUEIZJN94RM48T316HGD4T48INK3NDRY';
  dataEmiter = new EventEmitter();
  balanceEmiter = new EventEmitter();
  searchAddressFromLink = new EventEmitter();
  address = '';

  getApi(){
    return this.API_KEY;
  }
  storeAddress(address: string){
    this.address = address;
  }
  getAddress(){
    return this.address;
  }

}