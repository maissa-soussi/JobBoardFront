import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-coverletter',
  templateUrl: './upload-coverletter.component.html',
  styleUrls: ['./upload-coverletter.component.css']
})
export class UploadCoverletterComponent implements OnInit {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44304/api/CoverLetter', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(event.loaded / 1000);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }

}
