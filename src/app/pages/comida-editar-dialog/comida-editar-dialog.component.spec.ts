import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaEditarDialogComponent } from './comida-editar-dialog.component';

describe('ComidaEditarDialogComponent', () => {
  let component: ComidaEditarDialogComponent;
  let fixture: ComponentFixture<ComidaEditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidaEditarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaEditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
