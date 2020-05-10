import { TestBed } from '@angular/core/testing';

import { YtUrlService } from './yt-url.service';

describe('ArchiveService', () => {
  let service: YtUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
