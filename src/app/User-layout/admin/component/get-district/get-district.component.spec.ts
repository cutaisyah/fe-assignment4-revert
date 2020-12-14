import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDistrictComponent } from './get-district.component';

describe('GetDistrictComponent', () => {
  let component: GetDistrictComponent;
  let fixture: ComponentFixture<GetDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
