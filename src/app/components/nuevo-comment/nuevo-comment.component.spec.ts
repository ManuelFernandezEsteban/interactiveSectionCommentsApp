import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCommentComponent } from './nuevo-comment.component';

describe('NuevoCommentComponent', () => {
  let component: NuevoCommentComponent;
  let fixture: ComponentFixture<NuevoCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
