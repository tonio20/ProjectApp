import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneradorQRPage } from './generador-qr.page';

describe('GeneradorQRPage', () => {
  let component: GeneradorQRPage;
  let fixture: ComponentFixture<GeneradorQRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeneradorQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
