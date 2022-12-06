import { Location } from '@angular/common';
import { FooterService } from './footer.service';
import { IFooter } from './footer.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  public footer!: IFooter;

  constructor(
    private footerService: FooterService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.footerService.getAll().subscribe((result: IFooter) => {
      this.footer = {
        ...result,
        ...result.social.map(
          (soc) => (soc.href = this.location.path() + soc.href)
        ),
      };
    });
  }
}
