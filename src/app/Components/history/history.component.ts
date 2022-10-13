import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  Users:any[] = [];
  constructor(private usersService:UsersService){}

  ngOnInit(): void {
    if (this.usersService.Users.length>0) {
      this.Users = this.usersService.Users
    }else{
      this.usersService.fetchUsers();      
      this.Users = this.usersService.Users;
    }
  }

}
