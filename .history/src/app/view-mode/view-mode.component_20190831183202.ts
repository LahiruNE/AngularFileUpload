import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {
    userdata: any = [

      {Jobid: '02231', user: 'Saman Kumara', AssigneUser: 'P.D Gamage', CreateDate: '2019/04/25', C}
    ]

  constructor() { }

  ngOnInit() {
  }

}
