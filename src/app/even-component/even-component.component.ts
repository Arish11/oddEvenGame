import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-component',
  templateUrl: './even-component.component.html',
  styleUrls: ['./even-component.component.css']
})
export class EvenComponentComponent implements OnInit {
  @Input () count: any 
  constructor() { }

  ngOnInit(): void {
  }


}
