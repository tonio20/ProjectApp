import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajesPage } from './trajes.page';

describe('TrajesPage', () => {
  let component: TrajesPage;
  let fixture: ComponentFixture<TrajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
