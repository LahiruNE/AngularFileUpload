import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  userFromApi: User;

  images: any = [];
  allfiles: any = [];
  options: any;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

   fileUpload(event) {

    console.log(event);
    const files = event.target.files;

    if (files) {


    }

   }

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    });
  }
}
