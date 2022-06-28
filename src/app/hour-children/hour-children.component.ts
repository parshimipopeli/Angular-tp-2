import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hour-children',
  templateUrl: './hour-children.component.html',
  styleUrls: ['./hour-children.component.scss']
})
export class HourChildrenComponent implements OnInit {

  @Input()
   item!: Date;



  constructor() { }

  ngOnInit(): void {
  }

}



