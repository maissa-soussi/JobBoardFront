import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCadidateComponent } from './update-cadidate.component';

describe('UpdateCadidateComponent', () => {
  let component: UpdateCadidateComponent;
  let fixture: ComponentFixture<UpdateCadidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCadidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCadidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
