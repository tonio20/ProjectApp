import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasedatosPPage } from './basedatos-p.page';

describe('BasedatosPPage', () => {
  let component: BasedatosPPage;
  let fixture: ComponentFixture<BasedatosPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasedatosPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
