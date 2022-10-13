import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
  // baseUrl = 'https://random-data-api.com/api/v2/users?size=5';
  Users:any[] = [];

  constructor(private usersService:UsersService){}
  // constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    if (this.usersService.Users.length > 0) {
      console.log(this.usersService.Users);
      
      this.Users = this.usersService.Users
    }else{
      this.usersService.fetchUsers();      
      this.Users = this.usersService.Users;
    }
    console.log(this.Users);
    
    
    // this.httpClient.get(this.baseUrl).subscribe((res : any)=>{
    //   this.Users.push(res);
    // });
  }
}
