import { of, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectSubject = new Subject();
  private categories: any = [];
  private technologies: any = [];

  constructor() {}

  getProjects() {
    return of([]);
  }

  getFilters(projects: any) {
    this.filtersGenerate(projects).unsubscribe();
    return { categories: this.categories, technologies: this.technologies };
  }

  filtersGenerate(projects: any) {
    this.projectSubject.next(projects);

    return this.projectSubject.subscribe((projects: any) => {
      projects.map((item: any) => {
        if (
          !this.categories.find(
            (category: string) => item.category === category
          )
        ) {
          this.categories.push(item.category);
        }

        item.body?.technologies.map((technology: any) => {
          if (!this.technologies.find((tech: string) => tech === technology)) {
            this.technologies.push(technology);
          }
        });
      });
    });
  }
}
