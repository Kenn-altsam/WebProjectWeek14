import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInfo } from './booking-info';

describe('BookingInfo', () => {
  let component: BookingInfo;
  let fixture: ComponentFixture<BookingInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
