import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglalasokFelviteleComponent } from './foglalasok-felvitele.component';

describe('FoglalasokFelviteleComponent', () => {
  let component: FoglalasokFelviteleComponent;
  let fixture: ComponentFixture<FoglalasokFelviteleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoglalasokFelviteleComponent]
    });
    fixture = TestBed.createComponent(FoglalasokFelviteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
