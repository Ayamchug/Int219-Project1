import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { stringify } from 'querystring';
import * as internal from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  title:string;
  imgg:string;
  dishName:string;

  curatedItemsCount:number;

  root_context:string;
  homepage_url:string;
  headers: HttpHeaders;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {}

  exploreMenu(){
    this.router.navigate(['explore-menu']);
  }



}
