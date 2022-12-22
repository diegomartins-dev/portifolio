import { FooterService } from './footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  public footer?: any;

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.getFooter();
  }

  async getFooter() {
    this.footerService.getAll().subscribe(({ data }) => {
      this.footer = data;
    });
  }
}
