import { Component, OnInit } from '@angular/core';
import { Service } from '../app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  blocks = [];
  balanceData;
  fetching = true;
  constructor(private service: Service) { }

  ngOnInit(): void {
    this.service.fetching.subscribe(bool => {
      this.fetching = bool;
    })
    this.service.balanceEmiter.subscribe(data => {
      this.balanceData = data;
      this.fetching = false;

    })
    this.service.dataEmiter.subscribe(data => {
      this.blocks = [...data];
    })
  }
}
