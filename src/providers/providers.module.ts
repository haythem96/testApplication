import { NgModule } from "@angular/core";
//Web3.js provider
import { Web3Provider } from "./web3/web3";

@NgModule({
  providers: [
    //Providers
    Web3Provider
  ]
})
export class ProvidersModule { }
