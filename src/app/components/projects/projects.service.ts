import { Injectable } from '@angular/core';
import { of, timeout } from 'rxjs';
import { ApiDgsiteService } from 'src/app/services/api-dgsite.service';
import { Projects } from './projects.mock';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private categories: any = [];
  private technologies: any = [];

  constructor(private API: ApiDgsiteService) {}

  getProjects() {
    return this.API.getPublished('project').pipe(
      timeout({ each: 4000, with: () => of(Projects) })
    );
  }

  getFilters(projects: any) {
    this.filtersGenerate(projects);
    return { categories: this.categories, technologies: this.technologies };
  }

  filtersGenerate(projects: any) {
    projects.map((item: any) => {
      if (
        !this.categories.find((category: string) => item.category === category)
      ) {
        this.categories.push(item.category);
      }

      item.body?.technologies.map((technology: any) => {
        if (!this.technologies.find((tech: string) => tech === technology)) {
          this.technologies.push(technology);
        }
      });
    });
  }
}
