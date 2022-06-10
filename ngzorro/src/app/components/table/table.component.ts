import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

interface ItemData {
  id: string;
  name: string;
  age: string;
  address: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input     () items: any         = [];
  @Input     () itemHeaders: any   = {};
  @Input     () url: string        = '';
  @Input     () urlDetails: string = '';
  @Output    () getDeletId         = new EventEmitter();
  listOfData: ItemData[]           = [];

  constructor(
    private router: Router,
  ){}

  onclickRow(id: number) {
    console.log(this.urlDetails);

    this.router.navigate([this.urlDetails + id])
  }

  onclickEdit(id: Number) {
    this.router.navigate([this.url + id])
  }

  onclickAdd() {
    this.router.navigate([this.url + 0])
  }

  onclickArchive(id: Number):void {
    this.getDeletId.emit(id);
  }

  ngOnInit(): void {
  }
}
