import { of, Subject } from 'rxjs';
import { IProjects } from './projects.interface';
import { Injectable } from '@angular/core';
import { Projects } from './projects.mock';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectSubject = new Subject();

  constructor() {}

  getProjects() {
    return of(Projects);
  }

  getFilters(projects: IProjects[]) {
    let categories: any = [];
    let technologies: any = [];
    let subs = this.projectSubject.subscribe((items: any) => {
      items.map((item: IProjects) => {
        if (
          !categories.find((category: string) => item.category === category)
        ) {
          categories.push(item.category);
        }

        item.body?.technologies.map((technology) => {
          if (!technologies.find((tech: string) => tech === technology)) {
            technologies.push(technology);
          }
        });
      });
      subs.unsubscribe();
    });

    this.projectSubject.next(projects);

    return { categories, technologies };
  }
}
