import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesDashboardComponent } from './policies-dashboard.component';

describe('PoliciesDashboardComponent', () => {
  let component: PoliciesDashboardComponent;
  let fixture: ComponentFixture<PoliciesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
