import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicComponent } from './replic.component';

describe('ReplicComponent', () => {
  let component: ReplicComponent;
  let fixture: ComponentFixture<ReplicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
