import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlMonitorComponent } from './etl-monitor.component';

describe('EtlMonitorComponent', () => {
  let component: EtlMonitorComponent;
  let fixture: ComponentFixture<EtlMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtlMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtlMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
