import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllplansComponent } from './allplans.component';

describe('AllplansComponent', () => {
  let component: AllplansComponent;
  let fixture: ComponentFixture<AllplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllplansComponent]
    });
    fixture = TestBed.createComponent(AllplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
