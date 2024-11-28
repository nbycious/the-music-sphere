import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViniloComponent } from './vinilo.component';

describe('ViniloComponent', () => {
  let component: ViniloComponent;
  let fixture: ComponentFixture<ViniloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViniloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViniloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
