import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { V2PagesService } from '../../../services/pages.service';
import { V2AboutService } from '../../../services/about.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  bio = '';
  skills: any = [];
  indexes: number[] = [];

  constructor(
    private router: Router,
    private pagesService: V2PagesService,
    private apiService: V2AboutService
  ) {}

  ngOnInit() {
    this.pagesService.setCurrentUrl('/sobre-mim');

    this.apiService.getAllPublished('v1').subscribe((res) => {
      let result = res.data[0];

      this.bio = `<br/>${result.title} <br/><br/> ${result.subtitle} <br/><br/> ${result.description}`;
      this.skills = result.skills.sort((a: any, b: any) => {
        if (a?.value * 1 >= b?.value * 1) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }
}
