import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';

import { onUpdate } from '../helpers/components';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  json = [];

  constructor(
    private footerService: FooterService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.footerService.getAbout().subscribe((result: any) => {
      this.json = result;
    });
  }

  onSave(json: any) {
    let items = {
      id: json.id,
      publish: json.publish,
      data: { ...json.data },
    };
    onUpdate(items, this.footerService, this.alertService);
  }
}
