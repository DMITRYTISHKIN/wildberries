import { TestBed, inject } from '@angular/core/testing';

import { HostMonitorService } from './host-monitor.service';

describe('HostMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostMonitorService]
    });
  });

  it('should be created', inject([HostMonitorService], (service: HostMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
