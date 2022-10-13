import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = 'https://random-data-api.com/api/v2/users?size=5';
  Users:any[] = [];

  constructor(private httpClient: HttpClient){

  }
  fetchUsers(){
    this.httpClient.get(this.baseUrl).subscribe((res : any)=>{
      this.Users.push(res);
    });
  }

}
