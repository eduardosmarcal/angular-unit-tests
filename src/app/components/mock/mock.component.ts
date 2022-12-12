import { Component } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent {
  constructor(private myService: MyServiceService) {}

  getUsers(): void {
    this.myService.getUsers().subscribe();
  }
}
