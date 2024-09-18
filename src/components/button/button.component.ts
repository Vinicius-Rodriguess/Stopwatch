import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({ alias: "name", required: true })
  nameBtn: string = ""

  @Input({ alias: "color" })
  colorBtn = ""

  @Output("btnClicked")
  btnClicked = new EventEmitter<void>()

  handleClick() {
    this.btnClicked.emit()
  }
}
