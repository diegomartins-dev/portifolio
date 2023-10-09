import { Component, OnInit } from '@angular/core';
import { V2PagesService } from '../../services/pages.service';
import { V2HeaderService } from '../../services/header.service';

@Component({
  selector: 'v2-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class V2HeaderComponent implements OnInit {
  pages?: any;
  header?: any;

  constructor(
    private pagesService: V2PagesService,
    private headerService: V2HeaderService
  ) {}

  ngOnInit(): void {
    this.pagesService.getAllPages().subscribe({
      next: (res) => {
        console.log(res);
        this.pages = res?.data;
      },
    });

    this.headerService.getAllPublished('v1').subscribe({
      next: (res) => {
        console.log(res);
        this.header = res.data[0];
      },
    });
  }
}
