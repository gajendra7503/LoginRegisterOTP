import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPformComponent } from './otpform.component';

describe('OTPformComponent', () => {
  let component: OTPformComponent;
  let fixture: ComponentFixture<OTPformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTPformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OTPformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
