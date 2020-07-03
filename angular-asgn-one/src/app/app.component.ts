import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-asgn-one';
  isVisible:boolean = false;
  counterOne:number = 0;
  list:Array<string> = [];
  item:string = '';

  togglePara(){
    if(this.isVisible === true) this.isVisible = false;
    else if(this.isVisible === false) this.isVisible = true;
    this.counterOne++;
  }
  makeList(){
    if( this.item !== '') this.list.push(this.item);
    console.log(this.list);
  }
}
