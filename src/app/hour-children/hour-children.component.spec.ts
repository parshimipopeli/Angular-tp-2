import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourChildrenComponent } from './hour-children.component';

describe('HourChildrenComponent', () => {
  let component: HourChildrenComponent;
  let fixture: ComponentFixture<HourChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
