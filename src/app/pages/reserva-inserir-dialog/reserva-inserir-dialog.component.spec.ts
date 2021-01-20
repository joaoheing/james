import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaInserirDialogComponent } from './reserva-inserir-dialog.component';

describe('ReservaInserirDialogComponent', () => {
  let component: ReservaInserirDialogComponent;
  let fixture: ComponentFixture<ReservaInserirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaInserirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaInserirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
