import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasedatosPage } from './basedatos.page';

describe('BasedatosPage', () => {
  let component: BasedatosPage;
  let fixture: ComponentFixture<BasedatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasedatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
