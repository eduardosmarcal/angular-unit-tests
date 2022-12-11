import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserCredential } from '../interfaces/user-credential.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(userCredentials: UserCredential): Observable<UserCredential> {
    return this.http.post<UserCredential>(`${this.url}/login`, userCredentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getUsersWithPromise(): Promise<User[]> {
    return new Promise<User[]>(async (resolve, reject) => {
      try {
        const response$ = this.http.get<User[]>(`${this.url}/users`);
        const response = await lastValueFrom(response$);

        resolve(response);

      } catch (error) {
        reject(error);
      }
    });
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(true);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user);
  }

  putUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/users/${id}`);
  }

  getUserWithHeaders(): Observable<User[]> {
    const token: string = 'wa45a5a45a5a5a4a5a4a5a55a5a5a5a5a5a5a';
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<User[]>(`${this.url}/users`, { headers });
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }
}
