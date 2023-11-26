import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { DetailPage } from '../../components/tree-item/tree-item.component';
import { V2PagesService } from '../../services/pages.service';

@Component({
  selector: 'v2-app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class V2AboutComponent implements OnInit {
  navTitle?: string;

  detailsPagesBio: DetailPage[] = [
    {
      url: 'bio',
      title: 'sobre-mim',
    },
    {
      link: { target: '_blank', href: 'https://webcurriculo.firebaseapp.com' },
      title: 'web-curriculo',
    },
  ];

  // detailsPagesInterests: DetailPage[] = [
  //   {
  //     url: 'interests',
  //     title: 'index',
  //   },
  // ];

  detailsPagesEducation: DetailPage[] = [
    {
      url: 'education',
      title: 'descricao',
    },
  ];

  detailsPagesContact: DetailPage[] = [
    {
      title: 'dgmartins87@hotmail.com',
    },
    {
      title: '(71) 99332-9298',
    },
  ];

  constructor(
    private pagesService: V2PagesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.pagesService.getCurrentUrl().subscribe((url) => {
      this.navTitle = url;
      this.cdr.detectChanges();
    });
  }
}
