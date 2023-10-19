import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentbillsComponent } from './currentbills.component';

describe('CurrentbillsComponent', () => {
  let component: CurrentbillsComponent;
  let fixture: ComponentFixture<CurrentbillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentbillsComponent]
    });
    fixture = TestBed.createComponent(CurrentbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
