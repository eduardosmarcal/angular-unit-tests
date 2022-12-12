import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-asynchronous',
  templateUrl: './asynchronous.component.html',
  styleUrls: ['./asynchronous.component.scss']
})
export class AsynchronousComponent {
  data!: User[];
  dataPromise!: User[];
  isLogged: boolean = false;
  name!: string;

  constructor(private http: HttpService) {}

  getUsers(): void {
    this.http.getUsers().subscribe(res => this.data = res);
  }

  getUsersWithPromise(): void {
    this.http.getUsersWithPromise().then(res => this.dataPromise = res);
  }

  isAuthenticated(): void {
    this.http.isAuthenticated().then(res => this.isLogged = res);
  }

  defineValue(): void {
    this.name = 'Danilo';
    setTimeout(() => this.name = 'Jessica', 100);
  }
}
