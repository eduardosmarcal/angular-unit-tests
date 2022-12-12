import { Component } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { User } from '../../interfaces/user.interface';
import {Observable} from "rxjs";

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent {
  name!: string;
  email!: string;
  age!: string;

  constructor(private http: HttpService) { }

  getUsers(): void {
    this.http.getUsers().subscribe();
  }

  postUsers(): void {
    const user: User = {
      id: Math.random(),
      name: this.name,
      email: this.email,
      age: this.age
    };

    this.http.postUser(user).subscribe();
  }

  putUsers(id: any): void {
    const user: User = {
      name: this.name,
      email: this.email,
      age: this.age
    };

    this.http.putUser(id, user).subscribe();
  }

  deleteUser(id: number): void {
    this.http.deleteUser(id).subscribe();
  }

  getUsersWithHeaders(): void {
    this.http.getUserWithHeaders().subscribe();
  }

  getUsersById(id: number): void {
    this.http.getUserById(id).subscribe();
  }
}
