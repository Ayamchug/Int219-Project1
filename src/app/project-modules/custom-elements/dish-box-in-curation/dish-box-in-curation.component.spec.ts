import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from '../../home/home-page/home-page.component';

import { DishBoxInCurationComponent } from './dish-box-in-curation.component';

describe('DishBoxInCurationComponent', () => {
  let component: DishBoxInCurationComponent;
  let fixture: ComponentFixture<DishBoxInCurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishBoxInCurationComponent , HomePageComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishBoxInCurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
