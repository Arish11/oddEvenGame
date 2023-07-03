import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css',]
})
export class GameControlComponent implements OnInit {

  caller : any
  count : number = 0

  constructor() { }

  ngOnInit(): void {
  }
  startGame(){
   this.caller  = setInterval(()=>this.count++,1000)
  }
  stopGame(){
    clearInterval(this.caller)
    this.count =0
  }
}
