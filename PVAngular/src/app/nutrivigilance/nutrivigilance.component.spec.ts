import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrivigilanceComponent } from './nutrivigilance.component';

describe('NutrivigilanceComponent', () => {
  let component: NutrivigilanceComponent;
  let fixture: ComponentFixture<NutrivigilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrivigilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrivigilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
