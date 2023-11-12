import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { V2PagesService } from '../../../services/pages.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
})
export class BioComponent implements OnInit {
  bio =
    'Sou formado em Sistemas para Internet pela Unifacs \n e atuo na área de T.I. desde 2011. \n Sou um Desenvolvedor Web (Web Developer) com sólidos conhecimentos em tecnologias Fullstack, \n sendo o foco maior em Frontend. \n Gosto de tecnologia, inovação, criatividade, \n web designer, desenho, arte e games. \n Estou sempre disposto a aprender mais.';
  indexes: number[] = [];

  constructor(
    private router: Router,
    private pagesService: V2PagesService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.pagesService.setCurrentUrl(this.router.url);

    const textParagraph = document.querySelector('.bio');

    if (textParagraph) this.buildIndexesInEachLines(textParagraph);

    window.onresize = (e) => {
      this.buildIndexesInEachLines(textParagraph);
    };
  }

  buildIndexesInEachLines(textParagraph: Element | null) {
    this.indexes = [];
    if (textParagraph) {
      let paragraphOfBrokenTextInArray = textParagraph.innerHTML.split('<br>');

      let lines = 0;

      lines = this.buildIndexesInEachLine(
        textParagraph?.clientWidth,
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

  // buildIndexesInEachLine(textParagraph: Element) {
  //   this.indexes = [];

  //   let countWords = textParagraph?.innerHTML.length || 1;
  //   let tamanhoNaTela = textParagraph?.clientWidth || 1;

  //   let countIndexes = 0;
  //   let paddingContainer = 24;
  //   let onePixel = 1.259;
  //   if (textParagraph && countWords && tamanhoNaTela) {
  //     countIndexes =
  //       ((countWords * onePixel) /
  //         ((tamanhoNaTela + paddingContainer) * onePixel)) *
  //       10;
  //   }

  //   for (let i = 1; i <= countIndexes; i++) {
  //     this.indexes.push(i);
  //   }
  // }
}
