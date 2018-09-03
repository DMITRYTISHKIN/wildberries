import { Injectable } from '@angular/core';

import { HostModel, hostData } from './host-monitor.model';
import { MonitorService } from '@shared/monitor';

@Injectable()
export class HostMonitorService extends MonitorService<HostModel> {
  protected _data: HostModel[] = hostData;
}
