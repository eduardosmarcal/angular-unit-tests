import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpyonServiceService } from './spyon-service.service';

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
