import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devider } from './devider';

describe('Devider', () => {
  let component: Devider;
  let fixture: ComponentFixture<Devider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
