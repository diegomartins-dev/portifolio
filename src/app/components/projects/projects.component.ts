import { ProjectsService } from './projects.service';
import { IProjects } from './projects.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  public projectsBackup!: Array<IProjects>;
  public projects!: IProjects[];
  public categories = [];
  public technologies = [];

  public minimumScreenMobile = 1200;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((results: IProjects[]) => {
      this.projects = results.filter((project: IProjects) => project.published);

      const { categories, technologies } = this.projectsService.getFilters(
        this.projects
      );
      this.categories = categories;
      this.technologies = technologies;
    });
  }
}
