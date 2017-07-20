import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostComponent } from './jobpost.component';

describe('JobpostComponent', () => {
  let component: JobpostComponent;
  let fixture: ComponentFixture<JobpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});