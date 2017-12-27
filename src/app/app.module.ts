import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { userReducer } from './ngrx/userReducer';

import { RequireLoginGuard } from './require-login.guard';
import { PreventReSignInGuard } from './prevent-re-sign-in.guard';

const routesConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent, canActivate: [PreventReSignInGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [PreventReSignInGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [RequireLoginGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ProfileComponent,
    HomeComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot({ user: userReducer }),
    RouterModule.forRoot(routesConfig)
  ],
  providers: [
    RequireLoginGuard,
    PreventReSignInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
