import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaEditarDialogComponent } from './reserva-editar-dialog.component';

describe('ReservaEditarDialogComponent', () => {
  let component: ReservaEditarDialogComponent;
  let fixture: ComponentFixture<ReservaEditarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaEditarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaEditarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
