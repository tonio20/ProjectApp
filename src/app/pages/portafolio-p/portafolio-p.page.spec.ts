import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortafolioPPage } from './portafolio-p.page';

describe('PortafolioPPage', () => {
  let component: PortafolioPPage;
  let fixture: ComponentFixture<PortafolioPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PortafolioPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
