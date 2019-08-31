import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {
    userdata: any = [
      // tslint:disable-next-line:max-line-length
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'},
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'}
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'},
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'},
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'},
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'},
      {jobid: '02231', user: 'Saman Kumara', assigneUser: 'P.D Gamage', createDate: '2019/04/25', createTime: '05.00.45', status: 'Pending'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
