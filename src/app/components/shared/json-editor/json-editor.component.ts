import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import JSONEditor from 'jsoneditor';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.sass'],
})
export class JsonEditorComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() json!: {};
  @Input() index!: {};
  @Output() onSave = new EventEmitter();
  @ViewChildren('editor') editors!: QueryList<any>;

  public jsonOpened = false;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: any): void {
    console.log(this.editors);
    // const container = document.getElementById(
    //   'jsoneditor' + changes?.index?.currentValue
    // );
    // if (container) {
    //   this.editor = new JSONEditor(container, { mode: 'tree' });
    // }
    // if (this.editor && changes?.json?.currentValue)
    //   this.editor.update(changes?.json?.currentValue);
    // this.editor.map((view) => {
    //   console.log(view.nativeElement);
    // });
  }

  ngAfterViewInit() {
    // this.editors.changes.subscribe((res) => console.log(res));

    this.editors.forEach((div) => console.log(div));
  }

  handleSave() {
    const save = confirm('Deseja salvar os dados?');
    if (save) {
      // const updatedJson = this.editor.get();
      // this.onSave.emit(updatedJson);
    }
  }

  setMode(open: boolean) {
    this.jsonOpened = open;
    // this.editor.setMode(open ? 'text' : 'tree');
  }
}
