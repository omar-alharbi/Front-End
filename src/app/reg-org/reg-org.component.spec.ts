import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegOrgComponent } from './reg-org.component';

describe('RegOrgComponent', () => {
  let component: RegOrgComponent;
  let fixture: ComponentFixture<RegOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
