import { Component, OnInit } from '@angular/core';

import { IContent, IProfile } from './about.interface';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class SobreComponent implements OnInit {
  public profile?: IProfile;
  public content?: IContent;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getItemsAbout().subscribe((result) => {
      this.profile = result.profile;
      this.content = result.content;
    });
  }
}
