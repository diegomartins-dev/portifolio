import { FooterService } from './footer.service';
import { Component, OnInit, Input } from '@angular/core';
import { of } from 'rxjs';
import { Footer } from './footer.mock';

@Component({
  selector: 'v1-app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class V1FooterComponent implements OnInit {
  @Input() footer: any;

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.getFooter();
  }

  async getFooter() {
    this.footerService.getFooter().subscribe({
      next: (result) => {
        this.footer = result[0];
      },
    });
  }

  smoothScrollTo(anchor: string) {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
