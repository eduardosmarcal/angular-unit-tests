import { Component } from '@angular/core';

@Component({
  selector: 'app-spy-on',
  templateUrl: './spy-on.component.html',
  styleUrls: ['./spy-on.component.scss']
})
export class SpyOnComponent {
  logged: boolean = false;

  isLogged() {
    this.logged = true;
  }
}
