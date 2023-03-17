import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {component:TemplateComponent,
  path:"template",
  canActivate:[LoginGuard],
  canLoad:[LoginGuard]
},
  
  
  {
    component:HomeComponent,
    path:""
  },
  {
    path:"form",
    loadChildren:()=>import('./form/form.module').then((m)=>m.FormModule),
    canActivate:[LoginGuard],
    canLoad:[LoginGuard]
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    path:"login",
    component:LoginComponent
  },
//   { path: 'submitroute', loadChildren: () => import('./submittedform/submittedform.module').then(m => m.SubmittedformModule),
//   // canActivate:[LoginGuard],
//   // canLoad:[LoginGuard]
// },
{ path: 'submitroute/:formid', loadChildren: () => import('./submittedform/submittedform.module').then(m => m.SubmittedformModule),
// canActivate:[LoginGuard],
// canLoad:[LoginGuard]
},
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  {
    path:"**",
    component:NotfoundComponent
  },
 
  // {
  //   path:"",
  //   redirectTo:"/form",
  //   pathMatch:'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
