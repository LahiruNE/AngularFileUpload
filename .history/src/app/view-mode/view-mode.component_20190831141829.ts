import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileUploader} from "ng2-file-upload";
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {
  uploadForm: FormGroup;

  public uploader:FileUploader = new FileUploader({
    isHTML5: true
  });
  title: string = 'Angular File Upload';
  constructor(private fb: FormBuilder, private http: HttpClient ) { }

  uploadSubmit(){
        for (var i = 0; i < this.uploader.queue.length; i++) {
          let fileItem = this.uploader.queue[i]._file;
          if(fileItem.size > 10000000){
            alert("Each File should be less than 10 MB of size.");
            return;
          }
        }
        for (var j = 0; j < this.uploader.queue.length; j++) {
          let data = new FormData();
          let fileItem = this.uploader.queue[j]._file;
          console.log(fileItem.name);
          data.append('file', fileItem);
          data.append('fileSeq', 'seq'+ j);
          data.append( 'dataType', this.uploadForm.controls.type.value);
          this.uploadFile(data).subscribe(data => alert(data.message));
        }
        this.uploader.clearQueue();
  }

  uploadFile(data: FormData): Observable<any> {
    debugger
    return this.http.post<any>('http://localhost:8080/upload', data);






  constructor() { }

  ngOnInit() {
  }

}
