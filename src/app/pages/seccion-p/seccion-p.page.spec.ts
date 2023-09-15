import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeccionPPage } from './seccion-p.page';

describe('SeccionPPage', () => {
  let component: SeccionPPage;
  let fixture: ComponentFixture<SeccionPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeccionPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
