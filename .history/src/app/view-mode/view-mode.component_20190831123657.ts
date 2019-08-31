import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css']
})
export class ViewModeComponent implements OnInit {


  userData:  any = [

    {Jobid : "07541", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "45178", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "07541", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", AssignUser: "Gunarathne",  Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", AssignUser: "Gunarathne", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "07541", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "07541", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "07541", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "07541", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "07541", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45" , Status: "Pending"},
    {Jobid : "05448", User: "Deelipa Perera", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "04785", User: "Pamiduthia peiries", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "06254", User: "Sudantha kahawaththa", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "32014", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "85214", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "65479", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"},
    {Jobid : "58746", User: "Saman Kumara", Createdate: "2019/04/25", Createdtime: "05.00.45", Status: "Pending"}


];



  constructor() { }

  ngOnInit() {
  }

}
