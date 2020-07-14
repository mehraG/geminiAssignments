import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  storeUsers(obj: object){
    if (localStorage.info) { // if info stored previously in local data
      let storedData = JSON.parse(localStorage.getItem("info")); // storedData is an array of obj
      storedData.push(obj);
      localStorage.setItem('info', JSON.stringify(storedData));
    } else localStorage.setItem('info', JSON.stringify([obj])); // storing array for 1st time
  }

  fetchUsers(){
    return JSON.parse(localStorage.getItem("info")); // returning an array of objects
  }
}
