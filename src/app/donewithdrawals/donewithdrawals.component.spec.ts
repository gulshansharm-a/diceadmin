import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonewithdrawalsComponent } from './donewithdrawals.component';

describe('DonewithdrawalsComponent', () => {
  let component: DonewithdrawalsComponent;
  let fixture: ComponentFixture<DonewithdrawalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonewithdrawalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonewithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
