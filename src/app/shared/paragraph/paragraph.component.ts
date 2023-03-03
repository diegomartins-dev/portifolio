import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.sass'],
})
export class ParagraphComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
