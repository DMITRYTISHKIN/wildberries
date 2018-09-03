import { TestBed, inject } from '@angular/core/testing';

import { ServiceMonitorService } from './service-monitor.service';

describe('ServiceMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMonitorService]
    });
  });

  it('should be created', inject([ServiceMonitorService], (service: ServiceMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
