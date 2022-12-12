import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { SpyOnService } from './spy-on.service';
import { User } from '../interfaces/user.interface';

describe('SpyOnService', () => {
  let service: SpyOnService;
  const logger = jasmine.createSpy('log');
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SpyOnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', () => {
    const response: User[] = [
      { id: 1, name: 'Danilo', age: 30, email: 'danilo@gmail.com' },
      { id: 2, name: 'Ana', age: 25, email: 'ana@gmail.com' },
      { id: 3, name: 'Maria', age: 27, email: 'maria@gmail.com' }
    ];

    spyOn(service, 'getUsers').and.returnValues(of(response));

    service.getUsers().subscribe(res => {
      expect(res).toEqual(response);
    });
  });

  it('should create method with jasmine.createSpy', () => {
    logger('Logged in to the system.');

    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Logged in to the system.');
  });

  it('should create method with jasmine.createSpyObj', () => {
    status.name('Danilo');
    status.email('danilo@gmail.com');
    status.age(30);

    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith('Danilo');
    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledWith('danilo@gmail.com');
    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledWith(30);
  });
});
