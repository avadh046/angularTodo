import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T0DoComponent } from './t0-do.component';

describe('T0DoComponent', () => {
  let component: T0DoComponent;
  let fixture: ComponentFixture<T0DoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T0DoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(T0DoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
