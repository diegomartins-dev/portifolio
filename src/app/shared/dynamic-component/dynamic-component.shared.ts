import { QueryList, ViewContainerRef } from '@angular/core';
import { IDynamicComponent } from './dynamic-component.interface';

export class DynamicComponentShared {
  componentsListLoading: IDynamicComponent[];
  directiveHostViewChild!: any;

  constructor(componentsListLoading: IDynamicComponent[]) {
    this.componentsListLoading = componentsListLoading;
  }

  public getComponentByListLoading(
    componentName: string
  ): IDynamicComponent | undefined {
    return (
      this.componentsListLoading?.filter(
        (cmp: any) => cmp.name == componentName
      )[0] || undefined
    );
  }

  public getContainer(
    componentContainers: QueryList<ViewContainerRef>,
    componentGroup: string
  ): ViewContainerRef | undefined {
    return componentContainers.find(
      (componentItem: any) =>
        componentItem._hostTNode.attrs[1] === componentGroup
    );
  }

  loadComponentByDataInput(
    containers: QueryList<ViewContainerRef>,
    dataInput: [any]
  ) {
    dataInput.map((data) => {
      const component = this.getComponentByListLoading(data.component);
      if (component == undefined) return;

      const container = this.getContainer(containers, component.group);
      if (container == undefined) return;

      this.createComponent(container, component, {
        ...data,
      });
    });
  }

  private createComponent(
    container: ViewContainerRef,
    component: IDynamicComponent,
    data: any
  ) {
    if (container === undefined) return;
    const cmp = container.createComponent<any>(component.element);
    cmp.instance.data = { ...data };
  }

  loadingComponents(containers: QueryList<ViewContainerRef>, data: any) {
    this.loadComponentByDataInput(containers, data);
  }
}
