import { Injectable } from '@angular/core';
import { MoneyService } from './money.service';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  constructor(private moneyService: MoneyService) { }

  save() {
    window.localStorage.setItem('money', this.moneyService.money.toString());
  }

  load() {
    var moneyString = window.localStorage.getItem('money');
    this.moneyService.money = +moneyString;
  }

  
}
