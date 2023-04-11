import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFurnishComponent } from './image-furnish.component';

describe('ImageFurnishComponent', () => {
  let component: ImageFurnishComponent;
  let fixture: ComponentFixture<ImageFurnishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFurnishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageFurnishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
