import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPannelComponent } from './upper-pannel.component';

describe('UpperPannelComponent', () => {
  let component: UpperPannelComponent;
  let fixture: ComponentFixture<UpperPannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperPannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
