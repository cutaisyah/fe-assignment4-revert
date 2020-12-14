import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LurahProfileComponent } from './lurah-profile.component';

describe('LurahProfileComponent', () => {
  let component: LurahProfileComponent;
  let fixture: ComponentFixture<LurahProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LurahProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LurahProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
