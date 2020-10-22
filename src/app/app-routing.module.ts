import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';


import {BASE, CREATE, FEED} from './consts/routes.const';
import {CreateComponent} from './components/create/create.component';
import {FeedComponent} from './components/feed/feed.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([FEED]);


const routes: Routes = [
  {
    path: BASE,
    redirectTo: `/${FEED}`,
    pathMatch: 'full',
  },
  {
    path: FEED,
    component: FeedComponent,
  },
  {
    path: CREATE,
    component: CreateComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin},
  },
  // {path: 'home', component: HomeComponent},
  // {path: 'courses', component: CoursesComponent},
  // {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
