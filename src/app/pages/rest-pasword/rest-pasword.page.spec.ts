import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestPaswordPage } from './rest-pasword.page';

describe('RestPaswordPage', () => {
  let component: RestPaswordPage;
  let fixture: ComponentFixture<RestPaswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestPaswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
