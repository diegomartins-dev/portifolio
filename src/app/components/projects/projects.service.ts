import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectSubject = new Subject();
  private categories: any = [];
  private technologies: any = [];

  constructor(private API: ApiDgsiteService) {}

  getProjects() {
    return this.API.getPublished('project');
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
