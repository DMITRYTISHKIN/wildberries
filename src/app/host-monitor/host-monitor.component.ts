import { Component, OnInit, ViewChild } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { DxDataGridComponent } from 'devextreme-angular';
import { take } from 'rxjs/operators'

import { HostMonitorService } from './host-monitor.service';

@Component({
  selector: 'app-host-monitor',
  templateUrl: './host-monitor.component.html',
  styleUrls: ['./host-monitor.component.scss']
})
export class HostMonitorComponent implements OnInit {
  @ViewChild('mainTable') dataGrid: DxDataGridComponent;
  dataSource: DataSource;

  constructor(
    public service: HostMonitorService
  ) { }

  public contentReady(e): void {
    if (!e.component.getSelectedRowKeys().length) {
      e.component.selectRowsByIndexes(0);
    }
  }

  public selectionChanged(e): void {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
  }

  public onInitialized(e): void {
    this.dataGrid.instance.beginCustomLoading("");

    this.service.data$.pipe(
    ).subscribe(() => {
      this.dataGrid.instance.refresh();
    });
  }

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

}
