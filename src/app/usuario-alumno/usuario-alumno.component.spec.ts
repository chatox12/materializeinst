import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAlumnoComponent } from './usuario-alumno.component';

describe('UsuarioAlumnoComponent', () => {
  let component: UsuarioAlumnoComponent;
  let fixture: ComponentFixture<UsuarioAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
