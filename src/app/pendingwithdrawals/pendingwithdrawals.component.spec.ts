import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingwithdrawalsComponent } from './pendingwithdrawals.component';

describe('PendingwithdrawalsComponent', () => {
  let component: PendingwithdrawalsComponent;
  let fixture: ComponentFixture<PendingwithdrawalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingwithdrawalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingwithdrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
