import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Service } from '../app.service';

@Component({
  selector: 'app-block-result',
  templateUrl: './block-result.component.html',
  styleUrls: ['./block-result.component.css']
})
export class BlockResultComponent implements OnInit {

  address = '';
  API_KEY = ""
  constructor(private http: HttpClient,
    private service: Service) { }

  ngOnInit(): void {
    this.address = this.service.getAddress();
    this.API_KEY = this.service.getApi();
    let singleBlock = `https://api.etherscan.io/api?module=account&action=balance&address=${this.address}&tag=latest&apikey=${this.API_KEY}`;
    this.http.get(singleBlock)
      .subscribe(data =>
        console.log(data))
  }

}
