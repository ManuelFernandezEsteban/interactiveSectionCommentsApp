import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReplicComponent } from './new-replic.component';

describe('NewReplicComponent', () => {
  let component: NewReplicComponent;
  let fixture: ComponentFixture<NewReplicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReplicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReplicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
