import { DynamicComponentShared } from './../shared/dynamic-component/dynamic-component.shared';
import { IDynamicComponent } from './../shared/dynamic-component/dynamic-component.interface';
import { DynamicComponent } from './../shared/dynamic-component/dynamic-component';
import { ParagraphComponent } from './../shared/paragraph/paragraph.component';
import { ImageComponent } from '../shared/image/image.component';
import { ADHost } from '../shared/dynamic-component/ad-host.directive';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { LinkComponent } from '../shared/link/link.component';
import { SocialMediaComponent } from '../shared/social-media/social-media.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent
  extends DynamicComponentShared
  implements OnInit, AfterContentInit
{
  @Input('data') dataInput: any;
  @ViewChild(ADHost) abc: any;

  constructor() {
    let componentsListLoading: IDynamicComponent[] = [
      { name: 'ImageComponent', element: ImageComponent, group: 'left' },
      {
        name: 'ParagraphComponent',
        element: ParagraphComponent,
        group: 'left',
      },
      { name: 'LinkComponent', element: LinkComponent, group: 'left' },
      {
        name: 'SocialMediaComponent',
        element: SocialMediaComponent,
        group: 'right',
      },
    ];

    super(componentsListLoading);
    console.log(this.abc);
  }

  ngOnInit(): void {
    console.log(this.abc);
    super.directiveHostViewChild = this.abc;
    this.loadDataInput(this.dataInput);
  }

  ngAfterContentInit(): void {
    console.log(this.abc);
  }

  setTheme(event: any) {
    const button: HTMLElement = event.target;
    const classTheme = button.className.replace('button', '').trim();

    const body = document.body;
    const bodyClassList = body.classList;

    bodyClassList.forEach((classList) =>
      classList.indexOf('theme') !== -1 ? bodyClassList.remove(classList) : ''
    );

    bodyClassList.add(classTheme);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', classTheme);
  }
}
