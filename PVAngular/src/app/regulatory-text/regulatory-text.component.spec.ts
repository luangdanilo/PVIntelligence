import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryTextComponent } from './regulatory-text.component';

describe('RegulatoryTextComponent', () => {
  let component: RegulatoryTextComponent;
  let fixture: ComponentFixture<RegulatoryTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatoryTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
