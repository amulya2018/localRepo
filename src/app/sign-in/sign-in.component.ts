
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  Customer : any;
  isOn:boolean=false;
  notOn:boolean=false;
  
  constructor() {
  }

  ngOnInit(): void {
  }
toggleAddress(){
  this.isOn=!this.isOn;
}
  toggle(){
  this.notOn=!this.notOn;
}
}

