import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanitiaComponent } from './create-panitia.component';

describe('CreatePanitiaComponent', () => {
  let component: CreatePanitiaComponent;
  let fixture: ComponentFixture<CreatePanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
