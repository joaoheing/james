import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioInserirDialogComponent } from './funcionario-inserir-dialog.component';

describe('FuncionarioInserirDialogComponent', () => {
  let component: FuncionarioInserirDialogComponent;
  let fixture: ComponentFixture<FuncionarioInserirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioInserirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioInserirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
