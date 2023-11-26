import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-lines-indexed',
  templateUrl: './lines-indexed.component.html',
  styleUrls: ['./lines-indexed.component.scss'],
})
export class LinesIndexedComponent implements AfterViewChecked {
  @Input('text') text?: string;

  indexes: number[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    const textParagraph = document.querySelector('.text');
    this.buildIndexesInEachLines(textParagraph);
    this.cdr.detectChanges();

    window.onresize = (e) => {
      this.buildIndexesInEachLines(textParagraph);
    };
  }

  buildIndexesInEachLines(textParagraph: Element | null) {
    this.indexes = [];
    if (textParagraph) {
      let paragraphOfBrokenTextInArray = [];
      paragraphOfBrokenTextInArray = textParagraph.innerHTML.split('<br>');
      paragraphOfBrokenTextInArray.push(' ');

      let lines = 0;

      lines = this.buildIndexesInEachLine(
        textParagraph.clientWidth,
        paragraphOfBrokenTextInArray
      );

      for (let i = 1; i <= lines; i++) {
        this.indexes.push(i);
      }
    }
  }

  buildIndexesInEachLine(windowElementSize = 1, paragraphArray: any) {
    let howManyLinesBroke = 0;
    let valuePaddingContainer = 24;
    let valueOfPixel = 1.259;
    let quantityOfLines = 0;

    for (let i = 0; i < paragraphArray.length; i++) {
      let countWords = paragraphArray[i].length;

      if (countWords && windowElementSize) {
        howManyLinesBroke = Math.floor(
          ((countWords * valueOfPixel) /
            ((windowElementSize + valuePaddingContainer) * valueOfPixel)) *
            10
        );
        quantityOfLines = quantityOfLines + howManyLinesBroke;
      }
    }
    return quantityOfLines + paragraphArray.length;
  }
}
