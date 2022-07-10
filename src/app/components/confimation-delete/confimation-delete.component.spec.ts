import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfimationDeleteComponent } from './confimation-delete.component';

describe('ConfimationDeleteComponent', () => {
  let component: ConfimationDeleteComponent;
  let fixture: ComponentFixture<ConfimationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfimationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfimationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
