import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModules } from './common/enums/app-modules.enum';

const routes: Routes = [
  {
    path : AppModules.LANDING,
    children: [
      {
        path:'',
        loadChildren: () => import('./modules/landing-page/landing-page.module').then((module) => module.LandingPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
