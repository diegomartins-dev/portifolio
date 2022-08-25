import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ADHost]',
})
export class ADHost {
  @Input() group?: any;
  constructor(public viewContainerRef: ViewContainerRef) {}
}
