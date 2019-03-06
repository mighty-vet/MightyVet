import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  // -------------------log&reg-----------------------

  confirmLogin(user) {
    console.log("http.service confirmLogin", user);
    return this._http.post('/api/users/login', user);
  }
// -------------------users------------------------------
  addUser(newUser) {
    console.log("http.service addUser", newUser);
    return this._http.post('/api/users', newUser);
  }
  userUpdate(id, userUpdate) {
    console.log("http.service userupdate", userUpdate);
    return this._http.put('/api/users/' + id, userUpdate);
  }
  getUser(id) {
    console.log("http.service getting user", id);
    return this._http.get(`/api/users/${id}`);
  }
  getMeetings(id, bool){
    if(bool){
      return this._http.get(`/api/meetings/mentor/${id}`);
    }
    else{
      return this._http.get(`/api/meetings/mentee/${id}`);
    }
  }
  deleteUser(id) {
    return this._http.delete('/api/users/' + id);
  }

//------------------donations--------------------------

}
