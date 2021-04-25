import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidaturesComponent } from './admin-candidatures.component';

describe('AdminCandidaturesComponent', () => {
  let component: AdminCandidaturesComponent;
  let fixture: ComponentFixture<AdminCandidaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCandidaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
