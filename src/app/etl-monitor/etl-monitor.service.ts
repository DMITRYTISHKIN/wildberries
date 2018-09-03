import { Injectable } from '@angular/core';

import { EtlModel, etlData } from './etl-monitor.model';
import { MonitorService } from '@shared/monitor';

@Injectable()
export class EtlMonitorService extends MonitorService<EtlModel> {
  protected _data: EtlModel[] = etlData;

  public updateData(newValue: EtlModel): void {
    if (newValue.HAS_ERRORS && newValue.ENABLED === true) {
      newValue.ENABLED = false;
      newValue.ERRORS.push({
        TEXT: "Internal error",
        DATE: new Date()
      });
    }

    if (newValue.ENABLED === true) {
      newValue.LAST_START = new Date();
    }

   super.updateData(newValue);
  }

}
