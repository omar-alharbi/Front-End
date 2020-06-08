import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSuccessfulComponent } from './reg-successful.component';

describe('RegSuccessfulComponent', () => {
  let component: RegSuccessfulComponent;
  let fixture: ComponentFixture<RegSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
