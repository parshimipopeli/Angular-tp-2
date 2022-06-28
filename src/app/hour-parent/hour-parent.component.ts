import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hour-parent',
  templateUrl: './hour-parent.component.html',
  styleUrls: ['./hour-parent.component.scss']
})
export class HourParentComponent implements OnInit {

  @Output()
  displayDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
