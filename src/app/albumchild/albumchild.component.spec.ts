import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumchildComponent } from './albumchild.component';

describe('AlbumchildComponent', () => {
  let component: AlbumchildComponent;
  let fixture: ComponentFixture<AlbumchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
