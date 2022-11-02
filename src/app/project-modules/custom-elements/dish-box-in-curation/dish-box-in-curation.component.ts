import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-box-in-curation',
  templateUrl: './dish-box-in-curation.component.html',
  styleUrls: ['./dish-box-in-curation.component.css']
})
export class DishBoxInCurationComponent implements OnInit {

  @Input() dishTypeImg;
  @Input() text;
 
  constructor() { }

  ngOnInit() {
    
  }

}
