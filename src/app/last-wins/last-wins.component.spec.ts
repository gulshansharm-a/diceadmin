import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastWinsComponent } from './last-wins.component';

describe('LastWinsComponent', () => {
  let component: LastWinsComponent;
  let fixture: ComponentFixture<LastWinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastWinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastWinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
