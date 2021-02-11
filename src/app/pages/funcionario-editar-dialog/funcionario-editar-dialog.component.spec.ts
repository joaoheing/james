import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioEditarDialogComponent } from './funcionario-editar-dialog.component';

describe('FuncionarioEditarDialogComponent', () => {
  let component: FuncionarioEditarDialogComponent;
  let fixture: ComponentFixture<FuncionarioEditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioEditarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioEditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
