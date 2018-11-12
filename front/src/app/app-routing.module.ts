import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { MoviesComponent } from 'src/app/movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'

import { NotfoundComponent } from './notfound/notfound.component'


import { LoginService } from './login.service' 


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'movie/:id', component: MovieDetailComponent },
    { path: 'notfound', component: NotfoundComponent }
]


@NgModule({
    declarations:[
        MovieDetailComponent,
        LoginComponent,
        SignupComponent,
        NotfoundComponent
    ],
    imports:[
        RouterModule.forRoot(routes),
        CommonModule,
        FormsModule
    ],
    exports:[RouterModule],
    providers:[LoginService]
})
export class AppRoutingModule {}