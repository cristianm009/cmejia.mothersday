import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mothersDay';
  visible = false;
  controlVisible = true;
  nameField: FormControl;

  constructor() {
    this.nameField = new FormControl('',
      [
        Validators.minLength(2)
      ]
    );
  }

  changeVisible() {
    this.visible = !this.visible;
    this.changeControlVisible();
  }
  changeControlVisible() {
    this.controlVisible = !this.controlVisible;
    console.log(this.controlVisible);
  }
}
