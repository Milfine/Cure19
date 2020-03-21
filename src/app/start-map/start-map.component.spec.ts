import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMapComponent } from './start-map.component';

describe('StartMapComponent', () => {
  let component: StartMapComponent;
  let fixture: ComponentFixture<StartMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
