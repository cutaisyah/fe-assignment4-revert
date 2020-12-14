import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanitiaSidebarComponent } from './panitia-sidebar.component';

describe('PanitiaSidebarComponent', () => {
  let component: PanitiaSidebarComponent;
  let fixture: ComponentFixture<PanitiaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanitiaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitiaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
