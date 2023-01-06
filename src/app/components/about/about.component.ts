import { IProfile, IContent } from './about.interface';
import { AboutService } from './about.service';
import { Component, OnInit } from '@angular/core';
import { about } from './about.mock';
import { of } from 'rxjs';

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
      if (result) {
        this.profile = result.profile;
        this.content = result.content;
      } else {
        of(about).subscribe((result) => {
          this.profile = result.profile;
          this.content = result.content;
        });
      }
    });
  }
}
