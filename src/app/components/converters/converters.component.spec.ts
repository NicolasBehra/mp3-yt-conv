import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertersComponent } from './converters.component';

describe('ConvertersComponent', () => {
  let component: ConvertersComponent;
  let fixture: ComponentFixture<ConvertersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
