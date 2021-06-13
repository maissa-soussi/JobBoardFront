import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreCandidaturesTridiplomeComponent } from './offre-candidatures-tridiplome.component';

describe('OffreCandidaturesTridiplomeComponent', () => {
  let component: OffreCandidaturesTridiplomeComponent;
  let fixture: ComponentFixture<OffreCandidaturesTridiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreCandidaturesTridiplomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreCandidaturesTridiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
