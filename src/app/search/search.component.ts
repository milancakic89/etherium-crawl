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

  year = 2020;
  month = 10;
  day = 19;

  fromBlock = 9000000;
  toBlock = 9900000;
  results = 0;
  API_KEY: string;



  constructor(private service: Service,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.API_KEY = this.service.getApi();
    this.service.searchAddressFromLink.subscribe(link => {
      this.address = link;
      this.searchAddress();

    })
  }
  searchAddress() {
    this.service.storeAddress(this.address);
    let test = `https://api.etherscan.io/api?module=account&action=txlist&address=${this.address}&startblock=${this.fromBlock}&endblock=${this.toBlock}&sort=asc&apikey=${this.API_KEY}`;
    let singleAdressBalance = `https://api.etherscan.io/api?module=account&action=balance&address=${this.address}&tag=latest&apikey=${this.API_KEY}`;
    let startingRange = `https://api.etherscan.io/api?module=account&action=tokentx&address=${this.address}&startblock=${this.fromBlock}&endblock=${this.toBlock}&sort=asc&apikey=${this.API_KEY}`;

    this.http.get(singleAdressBalance)
      .subscribe((data) => {
        this.service.balanceEmiter.emit(data)
        this.http.get(test)
          .subscribe((data: { result }) => {
            this.service.dataEmiter.emit(data.result)
            this.results = data.result.length;
            console.log(data.result)
          });
      })
  }
  searchBlocksByRange(form: NgForm) {
    const fromBlock = form.value.fromBlock;
    const toBlock = form.value.toBlock;
    let addressRange = `https://api.etherscan.io/api?module=account&action=tokentx&address=${this.address}&startblock=${fromBlock}&endblock=${toBlock}&sort=asc&apikey=${this.API_KEY}`;

    this.http.get(addressRange)
      .subscribe((data: { result }) => {
        this.service.dataEmiter.emit(data.result)
        console.log(data.result)
        this.results = data.result.length;
      })
  }
  searchBlocksByDate(form: NgForm) {

  }



}
