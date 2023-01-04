import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
})
export class ProjectComponent implements OnInit {
  active!: number;
  json: any;
  loading = false;

  constructor(
    private projectService: ProjectService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.projectService.getProject().subscribe((result: any) => {
      console.log(result);
      this.json = result.length ? result : null;
      this.active = 0;
      this.loading = false;
    });
  }

  onPrev() {
    if (this.active != 0) this.active--;
  }

  onNext() {
    if (this.active < this.json.length - 1) this.active++;
  }

  onSave(json: {}) {
    // console.log(json);
    this.projectService.save(json).subscribe({
      next: (result) => {
        this.alertService.setAlert({
          type: 'success',
          message: result.message || 'Salvo com sucesso!',
        });
      },
    });
  }
}
