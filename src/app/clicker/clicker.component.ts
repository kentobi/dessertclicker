import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../money.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  constructor(public moneyService: MoneyService) { }

  ngOnInit() {
  }

  onClick() {
    this.moneyService.money += 1;
  }

  onReset() {
    this.moneyService.money = 0;
  }

}
