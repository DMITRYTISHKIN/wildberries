import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { EtlMonitorComponent, EtlMonitorService } from './etl-monitor';
import { HostMonitorComponent, HostMonitorService } from './host-monitor';
import { ServiceMonitorComponent, ServiceMonitorService } from './service-monitor';

@NgModule({
  declarations: [
    AppComponent,
    EtlMonitorComponent,
    HostMonitorComponent,
    ServiceMonitorComponent
  ],
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    FormsModule
  ],
  providers: [
    EtlMonitorService,
    HostMonitorService,
    ServiceMonitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
