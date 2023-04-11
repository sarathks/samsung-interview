import { NgModule } from '@angular/core';
import { ImageFurnishComponent } from './components/image-furnish/image-furnish.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ImageFurnishComponent

  ],
  exports: [
    ImageFurnishComponent
  ],
  imports: [
    CommonModule
    
  ]
})
export class AppCommonModule { }
