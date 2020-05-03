
import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './Customer';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  Customer : any;
  isOn:boolean=false;
  @Input('Customer') customer :Customer;
  constructor() { 

  }

  ngOnInit(): void {
  }
toggleAddress(){
  this.isOn=!this.isOn;
}
}
