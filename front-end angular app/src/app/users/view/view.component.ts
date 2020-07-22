import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public users = [];

  constructor(private router:Router, public usrService: UserService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.usrService.fetchUsers()
      .subscribe(data => {
        this.users = data;
        console.log('this.users', this.users);
      });
  }

  changeName(_name, _id) {
    let personName = prompt("Please enter new name:", _name);
    const regex = RegExp('[\s]*[a-zA-Z][a-zA-Z ]*');

    if ( personName === "" || !regex.test(personName)) {
      alert('Name should contain ONLY alpabets and spaces.')
    } else if(personName !== null){
      let obj = { id: _id, name: personName }
      console.log('obj is: ', obj)
      this.usrService.updateUsers(obj)
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/users/view']); }); // this is used to refresh page 
    }
  }

  delRow(_id) {
    let obj = { id: _id }
    this.usrService.deleteUsers(obj)
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users/view']); }); // this is used to refresh page
  }


}
