import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemerchComponent } from './detallemerch.component';

describe('DetallemerchComponent', () => {
  let component: DetallemerchComponent;
  let fixture: ComponentFixture<DetallemerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallemerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallemerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
