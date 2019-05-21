import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmetovigilanceComponent } from './cosmetovigilance.component';

describe('CosmetovigilanceComponent', () => {
  let component: CosmetovigilanceComponent;
  let fixture: ComponentFixture<CosmetovigilanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmetovigilanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmetovigilanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
