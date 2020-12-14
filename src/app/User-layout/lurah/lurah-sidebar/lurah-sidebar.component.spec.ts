import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LurahSidebarComponent } from './lurah-sidebar.component';

describe('LurahSidebarComponent', () => {
  let component: LurahSidebarComponent;
  let fixture: ComponentFixture<LurahSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LurahSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LurahSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
