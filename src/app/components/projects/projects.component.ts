import { ProjectsService } from './projects.service';
import { Component, OnInit } from '@angular/core';
import { Projects } from './projects.mock';
import { of } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  public projectsBackup?: [];
  public projects?: [];
  public categories = [];
  public technologies = [];

  public minimumScreenMobile = 1200;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((results: any) => {
      if (results && results.length) {
        this.setProjects(results);
      } else {
        of(Projects).subscribe({
          next: (res: any) => {
            this.setProjects(res);
          },
        });
      }
    });
  }

  setProjects(projects: any) {
    this.projects = projects.filter((project: any) => project.publish);
    console.log(this.projects);
    const { categories, technologies } = this.projectsService.getFilters(
      this.projects
    );
    this.categories = categories;
    this.technologies = technologies;
  }
}
