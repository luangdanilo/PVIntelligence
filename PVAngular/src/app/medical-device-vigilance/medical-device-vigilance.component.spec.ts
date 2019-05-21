import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDeviceVigilanceComponent } from './medical-device-vigilance.component';

describe('MedicalDeviceVigilanceComponent', () => {
  let component: MedicalDeviceVigilanceComponent;
  let fixture: ComponentFixture<MedicalDeviceVigilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalDeviceVigilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDeviceVigilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
