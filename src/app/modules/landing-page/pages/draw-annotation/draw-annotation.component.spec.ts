import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawAnnotationComponent } from './draw-annotation.component';

describe('DrawAnnotationComponent', () => {
  let component: DrawAnnotationComponent;
  let fixture: ComponentFixture<DrawAnnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawAnnotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
