import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import JSONEditor from 'jsoneditor';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.sass'],
})
export class JsonEditorComponent implements OnInit {
  @Input() json!: {};
  @Output() onSave = new EventEmitter();

  editor: any;

  constructor() {}

  ngOnInit(): void {
    // create the editor
    const container = document.getElementById('jsoneditor');
    const options = {};
    if (container) {
      this.editor = new JSONEditor(container, options);
      this.editor.set(this.json);
    }
  }

  handleSave() {
    const save = confirm('Deseja salvar os dados?');
    if (save) {
      const updatedJson = this.editor.get();
      this.onSave.emit(updatedJson);
    }
  }
}
