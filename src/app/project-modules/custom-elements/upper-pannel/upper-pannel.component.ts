import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upper-pannel',
  templateUrl: './upper-pannel.component.html',
  styleUrls: ['./upper-pannel.component.css']
})
export class UpperPannelComponent implements OnInit {

  
  isContactUsDisplayed:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    this.isContactUsDisplayed = false;
  }

  closeContactUs(){
    this.isContactUsDisplayed = false;
  }
  
  displayContactUs(){
    this.isContactUsDisplayed = true;
  }

  highlightOptions(id){
    document.getElementById(id).style.fontSize = '1.6em';
    document.getElementById(id).style.opacity = '150%';
  }

  aboutUs(){
    this.router.navigate(['about-us']);
  }

  homePage(){
    this.router.navigate(['home']);
  }
}


