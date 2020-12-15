import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanitiaProfileComponent } from './panitia-profile.component';

describe('PanitiaProfileComponent', () => {
  let component: PanitiaProfileComponent;
  let fixture: ComponentFixture<PanitiaProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanitiaProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanitiaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
