import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent implements OnInit {
  path!: string;

  constructor(public location: Location) {}

  ngOnInit(): void {
    this.path = this.location.path();
  }
}
