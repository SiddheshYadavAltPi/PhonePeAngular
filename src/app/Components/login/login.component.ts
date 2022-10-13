import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isEnable= false;
  onKeyUp(event:any){
    let btn = document.getElementsByClassName("proceedBtn") as HTMLCollectionOf<HTMLElement>;
    if (event.target.value.length>=10) {
      this.isEnable =true;
      btn[0].style.background="#6739b7";
      btn[0].style.color="white";
    }
    
  }
  constructor() { }
  ngOnInit(): void {
  }

}
