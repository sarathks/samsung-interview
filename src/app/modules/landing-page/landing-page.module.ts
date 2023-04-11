import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { DrawAnnotationComponent } from './pages/draw-annotation/draw-annotation.component';
import { AppCommonModule } from 'src/app/common/common.module';


@NgModule({
  declarations: [
    DrawAnnotationComponent
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
