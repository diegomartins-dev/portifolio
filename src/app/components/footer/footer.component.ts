import { FooterService } from './footer.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Footer } from './footer.mock';

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
    this.footerService.getAll().subscribe({
      next: ({ data }) => {
        if (data) {
          this.footer = data;
        } else {
          of(Footer).subscribe({
            next: (data) => {
              this.footer = data;
            },
          });
        }
      },
    });
  }
}
