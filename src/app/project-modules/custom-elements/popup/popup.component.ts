import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() header_text;
  @Input() body_text;
  @Input() id;
  
  constructor() { }

  ngOnInit() {
  }

  // closePopUp(){
  //   document.getElementById(this.id).style.display = 'none';    
  // }
}
