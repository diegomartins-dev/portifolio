import { ADHost } from './ad-host.directive';
import { QueryList, ViewContainerRef } from '@angular/core';
import { IDynamicComponent } from './dynamic-component.interface';
import { DynamicComponent } from './dynamic-component';

export class DynamicComponentShared {
  componentsListLoading: IDynamicComponent[];
  directiveHostViewChild!: QueryList<ADHost>;

  constructor(componentsListLoading: IDynamicComponent[]) {
    this.componentsListLoading = componentsListLoading;
  }

  public getComponentByListLoading(componentName: string) {
    return (
      this.componentsListLoading.filter(
        (cmp) => cmp.name == componentName
      )[0] || undefined
    );
  }

  public getDirective(componentGroup: string) {
    console.log(this.directiveHostViewChild);
    return (
      this.directiveHostViewChild?.filter(
        (cmp: any) => cmp.group === componentGroup
      )[0] || undefined
    );
  }

  public createComponent(
    componentDirective: DynamicComponent,
    headerViewContainerRef: ViewContainerRef
  ) {
    const componentRef =
      headerViewContainerRef.createComponent<DynamicComponent>(
        componentDirective.component
      );

    componentRef.instance.data = componentDirective.data;
  }

  loadDataInput(dataInput: [any]) {
    dataInput.map((dataInput) => {
      const componentByListLoading = this.getComponentByListLoading(
        dataInput.component
      );

      delete dataInput.component;
      if (componentByListLoading !== undefined)
        this.loadComponent(componentByListLoading, { ...dataInput });
    });
  }

  private loadComponent(componentByListLoading: IDynamicComponent, data: any) {
    const componentDirective = new DynamicComponent(
      componentByListLoading.element,
      data
    );

    const directiveHost = this.getDirective(componentByListLoading.group);
    if (directiveHost === undefined) return;

    const headerViewContainerRef = directiveHost.viewContainerRef;

    this.createComponent(componentDirective, headerViewContainerRef);
  }
}
