import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaInserirDialogComponent } from './bebida-inserir-dialog.component';

describe('BebidaInserirDialogComponent', () => {
  let component: BebidaInserirDialogComponent;
  let fixture: ComponentFixture<BebidaInserirDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidaInserirDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidaInserirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
