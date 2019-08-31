import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { forkJoin } from 'npm 
@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {
  progress;
  canBeClosed = true;
  primaryButtonText = 'Upload';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;


  addFiles() {
    this.file.nativeElement.click();
  }




  constructor() { }

  ngOnInit() {
  }

}
