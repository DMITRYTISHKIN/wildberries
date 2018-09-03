import { Injectable } from '@angular/core';

import { ServiceModel, serviceData } from './service-monitor.model';
import { MonitorService } from '@shared/monitor';

@Injectable()
export class ServiceMonitorService extends MonitorService<ServiceModel> {
  protected _data: ServiceModel[] = serviceData;
}
