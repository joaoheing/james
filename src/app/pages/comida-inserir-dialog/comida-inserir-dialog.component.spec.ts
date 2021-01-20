import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaInserirDialogComponent } from './comida-inserir-dialog.component';

describe('ComidaInserirDialogComponent', () => {
  let component: ComidaInserirDialogComponent;
  let fixture: ComponentFixture<ComidaInserirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaInserirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaInserirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
