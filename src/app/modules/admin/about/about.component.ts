import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';

import { onUpdate } from '../helpers/components';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  json = [];

  constructor(
    private aboutService: AboutService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe((result: any) => {
      this.json = result;
    });
  }

  onSave(json: any) {
    let items = {
      id: json.id,
      publish: json.publish,
      data: { profile: { ...json.profile }, content: { ...json.content } },
    };
    onUpdate(items, this.aboutService, this.alertService);
  }
}
