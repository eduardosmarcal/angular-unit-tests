import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MyServiceService } from './my-service.service';

describe('MyServiceService', () => {
  let service: MyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
