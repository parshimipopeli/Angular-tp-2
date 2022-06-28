import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourParentComponent } from './hour-parent.component';

describe('HourParentComponent', () => {
  let component: HourParentComponent;
  let fixture: ComponentFixture<HourParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
