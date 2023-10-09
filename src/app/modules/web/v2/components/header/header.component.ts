import { Component, OnInit } from '@angular/core';
import { V2PagesService } from '../../services/pages.service';

@Component({
  selector: 'v2-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class V2HeaderComponent implements OnInit {
  pages!: { title: string; href: string }[];

  constructor(private pagesService: V2PagesService) {}

  ngOnInit(): void {
    this.pagesService.getAllPages().subscribe({
      next: (res) => {
        console.log(res);
        this.pages = res?.data;
      },
    });
  }
}
