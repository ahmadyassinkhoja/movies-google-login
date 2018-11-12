import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class LoginService {

    constructor(private http: HttpClient){}
      // server movies url
//   moviesurl = 'http://localhost:3000/users'

//   // getting data from server
//   movies = this.http.get(this.moviesurl)

  
  users = this.http.get('http://localhost:3000/users')
  user


  authenticate(id){
      this.user = this.http.get(`http://localhost:3000/user/:${id}`)
      return  this.user
  }

  addUser (user){
    console.log(user)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.post('http://localhost:3000/addUser', user, httpOptions).subscribe((data) => this.user = data)
  }

  logout(user){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    this.http.delete(`http://localhost:3000/logoutUser/${user.id}`, httpOptions).subscribe((data) => console.log(data))
  }

}