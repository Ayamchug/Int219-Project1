import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  isAddressDisplayed:boolean;
  displayedAddress;
  locationList=[
    {
      'city':'MUMBAI',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'NEW DELHI',
      'address':'Savoury Bites, Sector 8, Hauj Khas, Kalu Sarai, New Delhi. Pin: 011'
    },
    {
      'city':'GURUGRAM',
      'address':'Savoury Bites, near fam society, sector 19S, Gurugram. Pin:012'
    },
    {
      'city':'CHENNAI',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Chennai Maharashtra. Pin:044'
    },
    {
      'city':'KOLKATA',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Kolkata. Pin:023'
    },
    {
      'city':'BANGALORE',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Banglore. Pin:234502'
    },
    {
      'city':'HYDERABAD',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Hyderabad,. Pin:400709'
    },
    {
      'city':'NASHIK',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'INDORE',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'DEHRADUN',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'CHANDIGARH',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'SHIMLA',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'UDAIPUR',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'MEERUT',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'MYSORE',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'GWALIOR',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'LUCKNOW',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'AMBALA',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'JAIPUR',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'BIKANER',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'ALWAR',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'VADODRA',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'AMRITSAR',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    {
      'city':'PATNA',
      'address':'Savoury Bites, near fam society, sector 19S, Koparkhairane, Navi Mumbai. Pin:400709'
    },
    
  ];


  constructor() { }

  ngOnInit() {
    this.isAddressDisplayed = false;
  }

  displayAddress(event){
    this.isAddressDisplayed = true;
    this.displayedAddress = event;
    console.log("Address : " + this.displayAddress)
  }

  closeAddress(){
    this.isAddressDisplayed = false;
  }

}
