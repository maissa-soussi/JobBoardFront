import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoverletterComponent } from './upload-coverletter.component';

describe('UploadCoverletterComponent', () => {
  let component: UploadCoverletterComponent;
  let fixture: ComponentFixture<UploadCoverletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCoverletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCoverletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
