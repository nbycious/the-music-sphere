import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallevinilComponent } from './detallevinil.component';

describe('DetallevinilComponent', () => {
  let component: DetallevinilComponent;
  let fixture: ComponentFixture<DetallevinilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallevinilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallevinilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
