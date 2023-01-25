import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoschildComponent } from './photoschild.component';

describe('PhotoschildComponent', () => {
  let component: PhotoschildComponent;
  let fixture: ComponentFixture<PhotoschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoschildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
