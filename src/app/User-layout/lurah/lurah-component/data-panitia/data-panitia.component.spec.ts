import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPanitiaComponent } from './data-panitia.component';

describe('DataPanitiaComponent', () => {
  let component: DataPanitiaComponent;
  let fixture: ComponentFixture<DataPanitiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPanitiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPanitiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
