import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreCandidaturesTriComponent } from './offre-candidatures-tri.component';

describe('OffreCandidaturesTriComponent', () => {
  let component: OffreCandidaturesTriComponent;
  let fixture: ComponentFixture<OffreCandidaturesTriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreCandidaturesTriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreCandidaturesTriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
