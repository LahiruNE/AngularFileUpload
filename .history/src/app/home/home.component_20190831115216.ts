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

  selectedFile: File = null;
    images: any = []; 
    allfiles: any = [];
    isVisible : boolean = false;
    status1: string = 'Pending';
    options: any;


  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
   }


   fileUpload(event){
    console.log(event); 
    // this.selectedFile =<File> event.target.files[0]; 
    const stat = "Pening";
   

    console.log(event);
    const files = event.target.files;
    console.log(files);
    
     if(files) {
        for (let i = 0; i< files.length; i++ ) {
            const x = i;
            
             var random = Math.random();
             var auto = random*100000000;
           
           const excel = {
               id: auto,
               name: '',
               type: this.allfiles,
               size: '',
               url: '',
               User:this.currentUser.username,
              status: stat
            };


            this.allfiles.push(files[i]);
            excel.name = files[i].name;
             excel.size = files[i].size;
           const reader = new FileReader();
          reader.onload = (filedata) => {
            excel.url = reader.result + '';
            this.images.push(excel);

           };
           
           reader.readAsDataURL(files[i]);
            console.log(excel.url);
            console.log(excel.url);
            //Output as Json to the console.log
          console.log(JSON.stringify(excel));
         this.options = excel;
         
         }
      
    }
    

 event.srcElement.value = null;


 
}

  ngOnInit() {
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
    })
  }
}