import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdemoapiComponent } from './userdemoapi.component';

describe('UserdemoapiComponent', () => {
  let component: UserdemoapiComponent;
  let fixture: ComponentFixture<UserdemoapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdemoapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdemoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
