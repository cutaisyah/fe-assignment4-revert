import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLurahComponent } from './create-lurah.component';

describe('CreateLurahComponent', () => {
  let component: CreateLurahComponent;
  let fixture: ComponentFixture<CreateLurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
