import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredential } from './interfaces/user-credential.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user!: UserCredential;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = {
      name: 'Danilo',
      email: 'danilodev.silva@gmail.com',
      password: '091011'
    };
  }

  getUserMessage(message: string): void {
    console.log("Child's message: ", message);
  }

  goTo(route: string): void {
    void this.router.navigate([`/${route}`]);
  }
}
