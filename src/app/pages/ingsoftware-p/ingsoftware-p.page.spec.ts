import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngsoftwarePPage } from './ingsoftware-p.page';

describe('IngsoftwarePPage', () => {
  let component: IngsoftwarePPage;
  let fixture: ComponentFixture<IngsoftwarePPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngsoftwarePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
