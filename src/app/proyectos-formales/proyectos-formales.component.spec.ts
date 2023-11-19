import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosFormalesComponent } from './proyectos-formales.component';

describe('ProyectosFormalesComponent', () => {
  let component: ProyectosFormalesComponent;
  let fixture: ComponentFixture<ProyectosFormalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectosFormalesComponent]
    });
    fixture = TestBed.createComponent(ProyectosFormalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
