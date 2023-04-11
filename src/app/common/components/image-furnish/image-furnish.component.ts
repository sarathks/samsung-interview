import { Component, ElementRef, ViewChild } from '@angular/core';
import { GENERAL_TEXTS } from '../../../common/constants/general-texts';
// @ts-ignore
import { Annotorious } from '@recogito/annotorious';

@Component({
  selector: 'app-image-furnish',
  templateUrl: './image-furnish.component.html',
  styleUrls: ['./image-furnish.component.scss']
})
export class ImageFurnishComponent {

  @ViewChild('annotate', { static: false }) public annotate: ElementRef | any;

  imageAnnotate: any;
  annotations: Array<any> = [];
  url: string | ArrayBuffer | null = '';
  message: string = "";

  GENERAL_TEXTS = GENERAL_TEXTS;

  initializeAnnotationLibrary(): void {
    this.imageAnnotate = new Annotorious({
      image: this.annotate.nativeElement,
      widgets: ['COMMENT'],
    });

    this.imageAnnotate.on('createAnnotation', (annotation: string, overrideId: string) => {
      this.annotations.push(annotation);
    });
  }

  trackAnnotation(index: number, annotation: any) {
    return annotation.id;
  }

  save() {
    this.annotations = this.imageAnnotate.getAnnotations();
  }

  delete(id: string) {
    this.imageAnnotate.removeAnnotation(id);
    this.annotations.splice(this.annotations.findIndex((annotation) => annotation.id === id), 1);
  }

  clear() {
    this.imageAnnotate.clearAnnotations();
    this.annotations = [];
  }


  selectFile(event: any) {
    if (!event?.target?.files[0] || event?.target?.files[0]?.length === 0) {
      this.message = this.GENERAL_TEXTS.YOU_MUST_SELECT_AN_IMG
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = this.GENERAL_TEXTS.ONLY_IMGS_ARE_SUPPORTED;
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.message = "";
      this.url = reader.result;
    }
  }


}
