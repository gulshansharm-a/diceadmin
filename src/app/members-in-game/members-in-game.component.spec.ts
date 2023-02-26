import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersInGameComponent } from './members-in-game.component';

describe('MembersInGameComponent', () => {
  let component: MembersInGameComponent;
  let fixture: ComponentFixture<MembersInGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersInGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersInGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
