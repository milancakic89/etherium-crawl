import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-result',
  templateUrl: './block-result.component.html',
  styleUrls: ['./block-result.component.css']
})
export class BlockResultComponent implements OnInit {

singleBlock = "https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=YourApiKeyToken"
  constructor() { }

  ngOnInit(): void {
  }

}
