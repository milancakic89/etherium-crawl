import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  address = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae';
  token = '';

  year = 2020;
  month = 10;
  day = 19;

  fromBlock = 9000000;
  toBlock = 9900000;
  results = 0;
  API_KEY: string;

  timeStampBalance = 0;



  constructor(private service: Service,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.service.fetching.emit(true)
    this.API_KEY = this.service.getApi();
    this.service.searchAddressFromLink.subscribe(link => {
      this.address = link;
      this.searchAddress();

    })
  }
  searchAddress() {
    this.service.storeAddress(this.address);
    let fromBlockToBlock = `https://api.etherscan.io/api?module=account&action=txlist&address=${this.address}&startblock=${this.fromBlock}&endblock=${this.toBlock}&sort=asc&apikey=${this.API_KEY}`;
    let singleAdressBalance = `https://api.etherscan.io/api?module=account&action=balance&address=${this.address}&tag=latest&apikey=${this.API_KEY}`;


    this.http.get(singleAdressBalance)
      .subscribe((data) => {
        this.service.balanceEmiter.emit(data);

        this.http.get(fromBlockToBlock)
          .subscribe((data: { result }) => {
            this.service.dataEmiter.emit(data.result)
            this.results = data.result.length;
            this.service.fetching.emit(false)
          });

      })
  }
  searchBlocksByRange(form: NgForm) {
    const fromBlock = form.value.fromBlock;
    const toBlock = form.value.toBlock;
    let addressRange = `https://api.etherscan.io/api?module=account&action=tokentx&address=${this.address}&startblock=${fromBlock}&endblock=${toBlock}&sort=asc&apikey=${this.API_KEY}`;

    this.http.get(addressRange)
      .subscribe((data: { result }) => {
        this.results = data.result.length;
      })
  }
  searchBlocksByDate(form: NgForm) {
    this.service.fetching.emit(true)
    let fullDate = `${form.value.year}-${form.value.month}-${form.value.day}`;
    let timeStamp = new Date(fullDate).getTime() / 1000;

    let address = `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timeStamp}&closest=before&apikey=${this.API_KEY}`;

    this.http.get(address)
      .subscribe((data: { result }) => {
        this.service.balanceEmiter.emit(data);
        this.timeStampBalance = data.result;
      })
  }
 
}
