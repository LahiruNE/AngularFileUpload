import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:3000/upload/';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: URL});

  constructor() { }

  ngOnInit() {
  }
}
