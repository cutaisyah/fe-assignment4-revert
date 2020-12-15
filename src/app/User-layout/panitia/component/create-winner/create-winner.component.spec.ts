import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWinnerComponent } from './create-winner.component';

describe('CreateWinnerComponent', () => {
  let component: CreateWinnerComponent;
  let fixture: ComponentFixture<CreateWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
