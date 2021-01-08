import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaEditarDialogComponent } from './bebida-editar-dialog.component';

describe('BebidaEditarDialogComponent', () => {
  let component: BebidaEditarDialogComponent;
  let fixture: ComponentFixture<BebidaEditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaEditarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidaEditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
