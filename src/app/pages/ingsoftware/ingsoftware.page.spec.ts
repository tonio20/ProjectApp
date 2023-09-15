import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngsoftwarePage } from './ingsoftware.page';

describe('IngsoftwarePage', () => {
  let component: IngsoftwarePage;
  let fixture: ComponentFixture<IngsoftwarePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngsoftwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
