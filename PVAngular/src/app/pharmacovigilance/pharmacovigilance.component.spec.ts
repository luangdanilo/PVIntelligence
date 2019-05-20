import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacovigilanceComponent } from './pharmacovigilance.component';

describe('PharmacovigilanceComponent', () => {
  let component: PharmacovigilanceComponent;
  let fixture: ComponentFixture<PharmacovigilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacovigilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacovigilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
