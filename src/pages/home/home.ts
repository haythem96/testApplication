import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//web3 provider
import { Web3Provider } from '../../providers/web3/web3';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public web3: any;

  //ens registrat contract address in mainnet
  public ensRegistrarContract : string = "0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef";
  //current block number variable
  public currentBlock;
  //estimated number of blocks mined in 1 day
  public pastBlockNumber : number = 5760;
  //list of unseal bid events
  public unsealBidEvents : Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private web3Provider: Web3Provider
  ) {
    this.web3 = this.web3Provider.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() {
    this.init();
  }

  /**
   * @dev function to init current block number and requets event logs
   */
  public async init() {
    //async function
    await this.getCurrentBlockNumber();
    this.getEvents();
  }

  /**
   * @dev get current block number from node
   */
  public async getCurrentBlockNumber() {
    this.currentBlock = await this.web3.eth.getBlockNumber();
    console.log(this.currentBlock);
  }

  /**
   * @dev get unsealed bid events
   */
  public getEvents() {
    //options object
    let options = {
      fromBlock: this.currentBlock-this.pastBlockNumber, //from block mined two days ago
      toBlock: 'latest',
      address: this.ensRegistrarContract, //smart contract address
      topics: [
        '0x7b6c4b278d165a6b33958f8ea5dfb00c8c9d4d0acf1985bef5d10786898bc3e7'  //event topic
      ]
    }

    //get past logs
    this.web3.eth.getPastLogs(options).then((res) => {
      this.currentBlock -= this.pastBlockNumber;
      this.unsealBidEvents = res.reverse();
      console.log(this.unsealBidEvents);
    }, (err) => {
      console.log(err);
    })
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.getEvents();

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
