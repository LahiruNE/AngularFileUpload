import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {


  addFiles() {
    this.file.nativeElement.click();
  }




  constructor() { }

  ngOnInit() {
  }

}
