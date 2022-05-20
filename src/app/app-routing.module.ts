import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './pages/user/posts/user-posts.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
      path: '',
      redirectTo: '/users',
      pathMatch: 'full',
  },
  {
      path: 'users',
      component: UsersComponent,
  },
  {
      path: 'user/:userId/posts',
      component: UserPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
