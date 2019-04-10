import { Component, OnInit } from '@angular/core';
import { SaveService } from "../save.service";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor(public saveService: SaveService) { }

  ngOnInit() {
  }

}
