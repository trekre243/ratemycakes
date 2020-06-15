import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeRatingComponent } from './cake-rating.component';

describe('CakeRatingComponent', () => {
  let component: CakeRatingComponent;
  let fixture: ComponentFixture<CakeRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
