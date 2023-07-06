import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesComponent } from './lenguajes.component';

describe('LenguajesComponent', () => {
  let component: LenguajesComponent;
  let fixture: ComponentFixture<LenguajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguajesComponent]
    });
    fixture = TestBed.createComponent(LenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
