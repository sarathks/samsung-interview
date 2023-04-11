import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawAnnotationComponent } from './pages/draw-annotation/draw-annotation.component';


const routes: Routes = [
  {
    path: '',
    component: DrawAnnotationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
