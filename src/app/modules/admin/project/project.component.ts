import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';

import { onUpdate } from '../helpers/components';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
})
export class ProjectComponent implements OnInit {
  json = [];

  constructor(
    private projectService: ProjectService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.projectService.getProject().subscribe((result: any) => {
      this.json = result;
    });
  }

  onSave(json: any) {
    let items = {
      id: json.id,
      publish: json.publish,
      data: { ...json.data },
    };
    onUpdate(items, this.projectService, this.alertService);
  }
}
