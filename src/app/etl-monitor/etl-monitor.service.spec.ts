import { TestBed, inject } from '@angular/core/testing';

import { EtlMonitorService } from './etl-monitor.service';

describe('EtlMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtlMonitorService]
    });
  });

  it('should be created', inject([EtlMonitorService], (service: EtlMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
