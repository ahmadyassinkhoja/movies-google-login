import { Component, OnInit, DoCheck } from '@angular/core';

import { MoviesService } from './movies.service'
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, DoCheck {
  movies
  user

  constructor(public movieService: MoviesService, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    // this.movies = this.movieService.movies
    
    // Getting data from service
    this.movieService.movies.subscribe( (data) => this.movies = data);
    this.user = this.loginService.user
  }

  ngDoCheck(){
  }


  addMovie(title,genre,length,photo) {
    console.log(title.value,genre.value,length.value,photo.files[0].name)
    this.movieService.addMovie(title,genre,length,photo)
  }

  onDeleteMovie(movie){
    console.log(movie)
    this.movieService.deleteMovie(movie)
  }

  logout(user){
    this.loginService.logout(user)
    this.router.navigate(['/'])
  }

}
