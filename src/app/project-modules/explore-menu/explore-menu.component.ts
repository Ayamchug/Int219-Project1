import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DishBoxInCurationComponent } from '../custom-elements/dish-box-in-curation/dish-box-in-curation.component';

@Component({
  selector: 'app-explore-menu',
  templateUrl: './explore-menu.component.html',
  styleUrls: ['./explore-menu.component.css']
})
export class ExploreMenuComponent implements OnInit {

  title:String;
  root_context_url:string;
  curatedList;
  entireDishList;
  voucherList;
  selectedVoucher;
  selectedDishes=[]
  curatedDishList=[]
  urlContext='explore-menu';
  ethnicity;
  selDish;
  output;
  isCartDisplayed:boolean;
  cartBox;
  isShippingAddressDisplayed;
  isContactUsDisplayed;
  customerCareImage;
  isOrderConfirmationDisplayed;
  orn;
  orderConfirmationImage;

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.title = "Explore Menu";
    this.root_context_url = "http://127.0.0.1:8080/";
    this.selDish = null;
    this.customerCareImage = "/assets/images/customerCare.jpg";
    this.orderConfirmationImage = "/assets/images/orderConfirmation.jpg";
    let  headers = new HttpHeaders()
                      .set('Event','FETCH_CURATED_LIST')
                      .set('content-type','application/json');
    
    this.selDish = []
    this.cartBox = []
    this.isCartDisplayed = false
    this.isShippingAddressDisplayed = false;
    this.isContactUsDisplayed = false;
    this.isOrderConfirmationDisplayed = false;
    this.orn = null;
    this.selectedVoucher = []

    this.loadEthnicity();
    this.loadDishintoList();
    this.loadDishIntoCuratedList();
    this.loadVouchers();
    this.loadDishesIntoSelectedDishes(this.ethnicity[0]);  

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

  addToCart(Event){
    this.cartBox.push(Event)
    console.log("Cart items : " + this.cartBox[0].id, this.cartBox[0].dishType, this.cartBox[0].ethnicity)
    let addToCartButton = document.getElementById("AddToCartButton");
    addToCartButton.style.color = 'greenyellow';
    addToCartButton.innerText = "Added";
  }

  getEthnicityValue(enthnicityType){
    this.ethnicity.forEach(element => {
      if(enthnicityType == element.String){
        return element
      }
    });
    return null
  }
 

  public loadDishesIntoSelectedDishes(ethnicity1){

      this.selectedDishes = [];
      this.entireDishList.forEach(element => {
        if(element.ethnicity == ethnicity1){
           this.selectedDishes.push({
              'id' : element.id,
              'dishType':element.dishType,
              'Image':element.Image,
              'name':element.name,
              'description':element.description,
              'ethnicity':element.ethnicity,
              'price':element.price,
              'qty':element.qty
           })
        }
      });
  }
  

 public sendRequest(method:String, headers:HttpHeaders) {
    
    if(method == 'GET'){
      return new Observable(observe=>{ 
        this.http.get( this.root_context_url, { headers : headers }).subscribe(resp =>{
            observe.next(resp);
          })
        })
    }
    else if (method == 'POST'){
      
    }
  }

  displayVoucher(voucher){
    this.selectedVoucher = voucher;
  }

  displayCart(){
    this.isCartDisplayed = true;
  }

  displayContactUs(){
    this.isContactUsDisplayed = true;
  }

  enterShipmentInfo(){
    this.isShippingAddressDisplayed = true;
    this.isCartDisplayed = false;
  }

  placeOrder(){
    this.isOrderConfirmationDisplayed = true;
    this.isShippingAddressDisplayed = false;
    this.orn = "DELIVERY_" + Math.floor((Math.random() * 10000000) + 1);
  }

  closeShipment(){
    this.isShippingAddressDisplayed = false;
  }
  
  closeOrderConfirmation(){
    this.orn = null;
  }

  closeContactUs(){
    this.isContactUsDisplayed = false;
  }

  closeCart(){
    this.isCartDisplayed = false;
  }

  closePopUp(){
    this.selectedVoucher = [];
  }

  closeDishPopUp(){
    this.selDish = []
  }

  reload(){
    this.router.navigate(['home']);
  }

  activateStepper(eth){
    this.loadDishesIntoSelectedDishes(eth)
  }

  displayDish(sel){
    this.selDish = sel;
  }

  loadDishintoList(){

    this.entireDishList = [
      {
        'id':'DISH_1',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\pizza.jpg',
        'name' : 'Pizza Margheritta',
        'description' : 'Pan base pizza topped with extra parmesan and fetta cheese sprinkled with herbs appaling to tastebuds',
        'ethnicity' : 'CONTINENTAL',
        'price': 350,
        'qty': 1
      },
      {
        'id':'DISH_2',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\shahiPaneer.jpg',
        'name' : 'Shahi Paneer',
        'description' : 'Firm Cottage Cheese in traditional North India buttery gravy infused with aromatic spices',
        'ethnicity' : 'PUNJABI',
        'price': 250,
        'qty': 1
      },
      {
        'id':'DISH_3',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\thaiCurry.jpg',
        'name' : 'Thai Curry',
        'description' : 'Indonesian and Thai amalgamation of mild dish with crunchy fresh veggies',
        'ethnicity' : 'INDONESIAN',
        'price': 250,
        'qty': 1
      },
      {
        'id':'DISH_4',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\fondue.jpg',
        'name' : 'Fondue',
        'description' : 'Italian delicacy with variety of snacks and dip',
        'ethnicity' : 'CONTINENTAL',
        'price': 250,
        'qty': 1
      },
      {
        'id':'DISH_5',
        'dishType': 'NON-VEG',
        'Image' : '\\assets\\images\\californiaBurger.jpg',
        'name' : 'Chicken Burger',
        'description' : 'Better with buns together',
        'ethnicity' : 'CONTINENTAL',
        'price': 170,
        'qty': 1
      },
      {
        'id':'DISH_6',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\garlicBread.jpg',
        'name' : 'Garlic Bread',
        'description' : 'Side dish but always garnering main-attention',
        'ethnicity' : 'CONTINENTAL',
        'price': 150,
        'qty': 1
      },
      {
        'id':'DISH_7',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\sizzler.jpg',
        'name' : 'DAL MAKHANI SIZZLER',
        'description' : 'ABCCC',
        'ethnicity' : 'PUNJABI',
        'price': 250,
        'qty': 1
      },
      {
        'id':'DISH_8',
        'dishType': 'NON_VEG',
        'Image' : '\\assets\\images\\chickenManchurian.jpg',
        'name' : 'CHICKEN MANCHURIAN',
        'description' : 'ABCCC',
        'ethnicity' : 'CHINESE',
        'price': 200,
        'qty': 1
      },
      {
        'id':'DISH_9',
        'dishType': 'VEG',
        'Image' : '\\assets\\images\\southIndianPlatter.jpg',
        'name' : 'SOUTH INDIAN THALI',
        'description' : 'ABCCC',
        'ethnicity' : 'SOUTH INDIAN',
        'price': 250,
        'qty': 1
      }

    ]
  }

  loadDishIntoCuratedList(){

    this.curatedList = ['DISH_1','DISH_3','DISH_4','DISH_8']
    this.curatedDishList = []
    this.curatedList.forEach(element => {
      this.entireDishList.forEach(element1 => {
        if(element == element1.id){
          this.curatedDishList.push({
            'id' : element1.id,
            'dishType':element1.dishType,
            'Image':element1.Image,
            'name':element1.name,
            'description':element1.description,
            'ethnicity':element1.ethnicity,
            'price': element1.price,
            'qty': element1.qty
         })
        }
      })
    })
  }


  loadVouchers(){
    this.voucherList = [
      {
        'id':'123',
        'name':'BOGO',
        'description':'Buy 1 Get 1 free offer to grab extra savour',
        'TnC':'1. Offer Applicable only on fridays....  2. Min order value : Rs. 300/-',
        'image':'\\assets\\images\\BOGO.jpg'
      },
      {
        'id':'124',
        'name':'FLAT Rs. 120 OFF',
        'description':'We care for your savings without compromising on taste',
        'TnC':'Applicable on minimum order of Rs. 500/-',
        'image':'\\assets\\images\\flat100Off.jpg'
      },
      {
        'id':'125',
        'name':'Unconditional free delivery',
        'description':'No threshold order price!! Whoa!!',
        'TnC':'APplicable only on Mondays',
        'image':'\\assets\\images\\freeDelivery.jpg'
      }
    ]
  }

  loadEthnicity(){
    this.ethnicity = [
      'CONTINENTAL',
      'PUNJABI',
      'SOUTH INDIAN',
      'INDONESIAN',
      'CHINESE'
    ]
  }



}
