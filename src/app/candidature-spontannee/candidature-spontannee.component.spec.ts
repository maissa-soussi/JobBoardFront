import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureSpontanneeComponent } from './candidature-spontannee.component';

describe('CandidatureSpontanneeComponent', () => {
  let component: CandidatureSpontanneeComponent;
  let fixture: ComponentFixture<CandidatureSpontanneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatureSpontanneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureSpontanneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
