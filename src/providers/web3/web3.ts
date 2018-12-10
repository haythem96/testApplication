import { Injectable } from '@angular/core';
import Web3 from 'web3';

/*
  Generated class for the Web3Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Web3Provider {

  public web3: any;

  constructor() {
    console.log('Hello Web3Provider Provider');
    /*if(typeof this.web3 !== 'undefined') {
      this.web3 = new Web3(this.web3.currentProvider);
    }
    else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/N0tGtDdQUJr70MLNeVod"));
    }*/
    this.web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider("ws://localhost:8546"));
    console.log(this.web3);
  }

  public get() {
    return this.web3;
  }

}
