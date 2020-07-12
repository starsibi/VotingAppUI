import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  public buttonMode:boolean = true;
  radiobutton: any;

  constructor() { 
    this.radiobutton = 1;
  }
  ngOnInit() {
  }
  public radioButtonClick(event){
     if(event.target.value == "Button"){
      this.buttonMode = true;
     }else{
       this.buttonMode = false;
     }
  }
}
