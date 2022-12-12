import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserCredential } from '../../interfaces/user-credential.interface';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  @Input() user!: UserCredential;
  @Output() userMessage: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('I got the user from the parent component:', this.user);
  }

  onUserEmit(): void {
    this.userMessage.emit('I got the user!');
  }
}
