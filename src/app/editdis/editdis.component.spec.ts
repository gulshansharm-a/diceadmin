import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdisComponent } from './editdis.component';

describe('EditdisComponent', () => {
  let component: EditdisComponent;
  let fixture: ComponentFixture<EditdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
