import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users:Array<object>=[];
  constructor(public usrService: UserService) { }

  ngOnInit(): void {
    this.users=this.usrService.fetchUsers();
  }

  base64ToImg(photo64){
    console.log('chala kya?',photo64);
  }

}
