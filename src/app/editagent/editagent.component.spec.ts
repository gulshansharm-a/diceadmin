import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditagentComponent } from './editagent.component';

describe('EditagentComponent', () => {
  let component: EditagentComponent;
  let fixture: ComponentFixture<EditagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditagentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
