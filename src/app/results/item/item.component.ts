import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/app.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() block;

  constructor(private service: Service) { }

  ngOnInit(): void {
    console.log(this.block.value / 1000);
  }
  onClickAddress(link) {
    this.service.fetching.emit(true)
    this.service.storeAddress(link.textContent);
    this.service.searchAddressFromLink.emit(link.textContent);
  }
}
