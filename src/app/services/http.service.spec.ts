import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { User } from '../interfaces/user.interface';

describe('HttpService', () => {
  let service: HttpService;
  let httpTestingController: HttpTestingController;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
    url = 'http://localhost:3000';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make GET request to get the list of users', () => {
    const res: User[] = [
      {
        name: "Danilo 2",
        email: "danilo@gmail.com",
        age: "30",
        id: 1
      },
      {
        id: 3,
        name: "Joao",
        email: "joao@gmail.com",
        age: 22
      },
      {
        id: 4,
        name: "Joao",
        email: "joao@gmail.com",
        age: 22
      },
      {
        id: 0.8230837961873159,
        name: "Danilo ",
        email: "danilo@gmail.com",
        age: "30"
      }
    ];

    const getUrl: string = `${url}/users`;

    service.getUsers().subscribe();

    const req = httpTestingController.expectOne(getUrl);
    req.flush(res);

    service.getUsers().subscribe(response => {
      expect(response).toEqual(res);
    });

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(getUrl);
  });

  it('should make GET request with ID to get a single user', () => {
    const id: number = 3;

    const res: User = {
      id: 3,
      name: 'Joao',
      email: 'joao@gmail.com',
      age: 22
    }

    const getByIdUrl: string = `${url}/users/${id}`;

    service.getUserById(id).subscribe(response => {
      expect(response).toEqual(res);
    });

    const req = httpTestingController.expectOne(getByIdUrl);

    expect(req.request.method).toEqual('GET');
    expect(req.request.url).toEqual(getByIdUrl);

    req.flush(res);
  });

  it('should receive error 500 when making a GET request to users', () => {
    service.getUsers().subscribe({
      error: (error) => {
        expect(error.status).toEqual(500);
      }
    });

    const getUrl: string = `${url}/users`;

    const req = httpTestingController.expectOne(getUrl);

    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(getUrl);

    req.flush(500, {
      status: 500,
      statusText: 'Internal Server Error'
    })
  });

  it('should make POST request to create new user', () => {
    const user: User = {
      id: 0.8230837961873159,
      name: 'Danilo',
      email: 'danilo@gmail.com',
      age: '30'
    };

    const res: User = {
      id: 0.8230837961873159,
      name: 'Danilo',
      email: 'danilo@gmail.com',
      age: '30'
    };

    const postUrl: string = `${url}/users`;

    service.postUser(user).subscribe(response => {
      expect(response).toEqual(res);
    });

    const req = httpTestingController.expectOne(postUrl);

    expect(req.request.method).toEqual('POST');
    req.flush(res);
  });

  it('should make PUT request to update a user', () => {
    const id: number = 1;

    const user: User = {
      name: 'Rafael',
      email: 'rafael@gmail.com',
      age: 22,
    };

    const res: User = {
      id: 1,
      name: 'Rafael',
      email: 'rafael@gmail.com',
      age: 22,
    };

    const putUrl: string = `${url}/users/${id}`;

    service.putUser(id, user).subscribe(response => {
      expect(response).toEqual(res);
    });

    const req = httpTestingController.expectOne(putUrl);

    expect(req.request.method).toEqual('PUT');
    expect(req.request.url).toEqual(putUrl);
  });

  it('should make DELETE request to delete a user', () => {
    const id: number = 2;
    const res: number = 2;
    const deleteUrl: string = `${url}/users/${id}`;

    service.deleteUser(id).subscribe(response => {
      expect(response).toEqual(res);
    });

    const req = httpTestingController.expectOne(deleteUrl);

    expect(req.request.method).toEqual('DELETE');
    expect(req.request.url).toEqual(deleteUrl);

    req.flush(res);
  });

  it('should contain Headers in the request', () => {
    service.getUserWithHeaders().subscribe();

    const req = httpTestingController.expectOne(`${url}/users`);

    expect(req.request.headers.has('content-type')).toBeTrue();
    expect(req.request.headers.has('authorization')).toBeTrue();
  });
});
