import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLurahComponent } from './get-lurah.component';

describe('GetLurahComponent', () => {
  let component: GetLurahComponent;
  let fixture: ComponentFixture<GetLurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetLurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
