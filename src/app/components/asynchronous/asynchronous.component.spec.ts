import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AsynchronousComponent } from './asynchronous.component';
import { HttpService } from '../../services/http.service';
import { User } from '../../interfaces/user.interface';

describe('AsynchronousComponent', () => {
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;
  let httpService: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AsynchronousComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpService = TestBed.inject(HttpService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make asynchronous request using Observable', () => {
    const res: User[] = [
      {
        name: 'Danilo 2',
        email: 'danilo@gmail.com',
        age: '30',
        id: 1
      },
      {
        id: 3,
        name: 'Joao',
        email: 'joao@gmail.com',
        age: 22
      },
      {
        id: 4,
        name: 'Joao',
        email: 'joao@gmail.com',
        age: 22
      },
      {
        id: 0.8230837961873159,
        name: 'Danilo',
        email: 'danilo@gmail.com',
        age: '30'
      }
    ];

    spyOn(httpService, 'getUsers').and.returnValues(of(res));

    component.getUsers();

    expect(component.data).toEqual(res);
  });

  it('should make asynchronous request using Promise', async () => {
    const res: User[] = [
      {
        name: 'Danilo 2',
        email: 'danilo@gmail.com',
        age: '30',
        id: 1
      },
      {
        id: 3,
        name: 'Joao',
        email: 'joao@gmail.com',
        age: 22
      },
      {
        id: 4,
        name: 'Joao',
        email: 'joao@gmail.com',
        age: 22
      },
      {
        id: 0.8230837961873159,
        name: 'Danilo',
        email: 'danilo@gmail.com',
        age: '30'
      }
    ];

    spyOn(httpService, 'getUsersWithPromise').and.returnValue(Promise.resolve(res));

    await component.getUsersWithPromise();

    expect(component.dataPromise).toEqual(res);
  });

  it('should log the user in', (done: DoneFn) => {
    const loggedOutElement = fixture.debugElement.query(By.css('.logged-out')).nativeElement;

    expect(loggedOutElement.textContent).toEqual('Logged Out');

    const spiedService = spyOn(httpService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

    component.isAuthenticated();

    spiedService.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const loggedElement = fixture.debugElement.query(By.css('.logged')).nativeElement;
      expect(loggedElement.textContent).toEqual('Logged');
      done();
    });
  });

  it('should log the user in with whenStable', async () => {
    const loggedOutElement = fixture.debugElement.query(By.css('.logged-out')).nativeElement;

    expect(loggedOutElement.textContent).toEqual('Logged Out');

    spyOn(httpService, 'isAuthenticated').and.returnValue(Promise.resolve(true));

    component.isAuthenticated();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const loggedElement = fixture.debugElement.query(By.css('.logged')).nativeElement;
      expect(loggedElement.textContent).toEqual('Logged');
    })
  });

  it('should set name', fakeAsync(() => {
    component.defineValue();
    tick(100);
    expect(component.name).toEqual('Jessica');
  }));
});
