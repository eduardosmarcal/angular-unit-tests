import { Component } from '@angular/core';

@Component({
  selector: 'app-handle-event',
  templateUrl: './handle-event.component.html',
  styleUrls: ['./handle-event.component.scss']
})
export class HandleEventComponent {
  emoji: any;

  onClick() {
    this.emoji = '👨‍🎓';
  }
}
