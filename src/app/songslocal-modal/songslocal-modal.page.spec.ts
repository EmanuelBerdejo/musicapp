import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongslocalModalPage } from './songslocal-modal.page';

describe('SongslocalModalPage', () => {
  let component: SongslocalModalPage;
  let fixture: ComponentFixture<SongslocalModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SongslocalModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
