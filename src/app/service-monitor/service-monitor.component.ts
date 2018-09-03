import { Component, OnInit, ViewChild } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { DxDataGridComponent } from 'devextreme-angular';
import { take } from 'rxjs/operators'

import { ServiceMonitorService } from './service-monitor.service';

@Component({
  selector: 'app-service-monitor',
  templateUrl: './service-monitor.component.html',
  styleUrls: ['./service-monitor.component.scss']
})
export class ServiceMonitorComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  dataSource: DataSource;

  constructor(
    public service: ServiceMonitorService
  ) { }

  ngOnInit() {
    this.dataSource = new DataSource([]);

    this.service.data$.pipe(
      take(1)
    ).subscribe((data) => {
      this.dataSource = new DataSource(data);
      this.dataGrid.instance.endCustomLoading();
    });
    this.service.fetch();

  }

  public onInitialized(e): void {
    this.dataGrid.instance.beginCustomLoading("");

    this.service.data$.pipe(
    ).subscribe(() => {
      this.dataGrid.instance.refresh();
    });
  }

}
