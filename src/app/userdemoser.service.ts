import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdemoserService {

  constructor(private _http:HttpClient) { }
  creatuser(user:any){
    return this._http.post("http://3.21.163.69:3001/api-docs/#/Policy/get_policy_list",user);
  }
  getalluser(){}
  updateuser(){}
  deleteuser(){}
}
