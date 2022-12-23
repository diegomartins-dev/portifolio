import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import JSONEditor from 'jsoneditor';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.sass'],
})
export class JsonEditorComponent implements OnInit, AfterViewInit {
  @Input() json!: {};
  @Input() qtItems!: number;
  @Input() index!: number;
  @Output() onSave = new EventEmitter();
  private container: any;
  private static editors: any = [];

  public jsonOpened = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.container = document.getElementById('jsoneditor' + this.index);

    if (this.container && JsonEditorComponent.editors.length < this.qtItems) {
      JsonEditorComponent.editors.push(
        new JSONEditor(this.container, { mode: 'tree' })
      );
    } else {
      this.container = document.getElementById('jsoneditor' + this.index);
      JsonEditorComponent.editors[this.index].destroy();
      JsonEditorComponent.editors[this.index] = new JSONEditor(this.container, {
        mode: 'tree',
      });
    }

    if (JsonEditorComponent.editors[this.index] && this.json)
      JsonEditorComponent.editors.map((editor: any, index: any) => {
        if (index == this.index) {
          JsonEditorComponent.editors[this.index].update(this.json);
        }
      });
  }

  handleSave(id: number) {
    const save = confirm('Deseja salvar os dados?');
    if (save) {
      const updatedJson = JsonEditorComponent.editors[id].get();
      this.onSave.emit(updatedJson);
    }
  }

  setMode(open: boolean, id: number) {
    this.jsonOpened = open;
    JsonEditorComponent.editors[id].setMode(open ? 'text' : 'tree');
  }
}
