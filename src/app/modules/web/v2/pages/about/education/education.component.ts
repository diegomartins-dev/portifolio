import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { V2PagesService } from '../../../services/pages.service';
import { V2AboutService } from '../../../services/about.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education = '';
  constructor(
    private router: Router,
    private pagesService: V2PagesService,
    private apiService: V2AboutService
  ) {}

  ngOnInit() {
    this.pagesService.setCurrentUrl('/descricao');

    this.apiService.getAllPublished('v1').subscribe((res) => {
      let result = res.data[0];

      this.education = `<br/> Educação <br/><br/>${result.education}`;
    });
  }
}
