import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../money.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  constructor(public moneyService: MoneyService) { }

  ngOnInit() {
  }

}
