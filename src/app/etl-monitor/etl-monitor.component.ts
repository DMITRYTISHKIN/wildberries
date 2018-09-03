import { Component, OnInit, ViewChild } from '@angular/core';

import DataSource from 'devextreme/data/data_source';
import { DxDataGridComponent } from 'devextreme-angular';
import { take } from 'rxjs/operators'

import { EtlMonitorService } from './etl-monitor.service';

@Component({
  selector: 'app-etl-monitor',
  templateUrl: './etl-monitor.component.html',
  styleUrls: ['./etl-monitor.component.scss'],
})
export class EtlMonitorComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  dataSource: DataSource;

  constructor(
    public service: EtlMonitorService
  ) { }

  ngOnInit() {
    this.dataSource = new DataSource([]);

    this.service.data$.pipe(
      take(1),
    ).subscribe((data) => {
      this.dataSource = new DataSource(data);
      this.dataGrid.instance.endCustomLoading();
    });
    this.service.fetch();
  }

  public onClickError(e): void {
    if (this.dataGrid.instance.isRowExpanded(e.row.key)) {
      this.dataGrid.instance.collapseRow(e.row.key);
    } else {
        this.dataGrid.instance.expandRow(e.row.key);
    }
  }

  public onInitialized(e): void {
    this.dataGrid.instance.beginCustomLoading("");

    this.service.data$.pipe(
    ).subscribe(() => {
      this.dataGrid.instance.refresh();
    });
  }

  public onRowUpdated(e): void {
    this.service.updateData(e.key);
  }
}
