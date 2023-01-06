import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/shared/alert/alert.service';

import { onSave } from '../../helpers/components';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.sass'],
})
export class NewAboutComponent implements OnInit {
  constructor(
    private aboutService: AboutService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  onSave(json: any) {
    let items = {
      publish: json.publish,
      data: { profile: { ...json.profile }, content: { ...json.content } },
    };
    onSave(items, this.aboutService, this.alertService);
  }
}
