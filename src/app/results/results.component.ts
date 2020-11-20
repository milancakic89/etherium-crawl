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
  constructor(private service: Service) { }

  ngOnInit(): void {
    this.service.balanceEmiter.subscribe(data =>{
      this.balanceData = data;
      console.log(data);
    })
    this.service.dataEmiter.subscribe(data => {
      this.blocks = [...data];
      let num = 563038723826132778350856;
      console.log(num / 1000);
    })
  }

}
