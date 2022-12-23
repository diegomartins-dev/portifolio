import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/components/about/about.mock';
import { AlertService } from 'src/app/components/shared/alert/alert.service';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  active!: number;
  json: any;

  constructor(
    private aboutService: AboutService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((result: any) => {
      this.json = result;
      this.active = 0;
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
    this.aboutService.save(json).subscribe({
      next: (result) => {
        this.alertService.setAlert({
          type: 'success',
          message: result.message || 'Salvo com sucesso!',
        });
      },
    });
  }
}
