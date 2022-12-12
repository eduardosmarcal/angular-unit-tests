import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';
import { MyServiceService } from './my-service.service';
import { User } from '../interfaces/user.interface';

class MyServiceMock extends MyServiceService {
  static users: User[] = [
    {
      "name": "Danilo 2",
      "email": "danilo@gmail.com",
      "age": "30",
      "id": 1
    },
    {
      "id": 3,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 4,
      "name": "Joao",
      "email": "joao@gmail.com",
      "age": 22
    },
    {
      "id": 0.8230837961873159,
      "name": "Danilo ",
      "email": "danilo@gmail.com",
      "age": "30"
    }
  ];

  override getUsers(): Observable<User[]> {
    return of(MyServiceMock.users);
  }
}

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: MyServiceService,
          useClass: MyServiceMock
        }
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP request', () => {
    service.getUsers().subscribe(res => {
      expect(res).toEqual(MyServiceMock.users);
    })
  });
});
