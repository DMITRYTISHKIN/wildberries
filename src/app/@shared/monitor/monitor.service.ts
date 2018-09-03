import { BehaviorSubject, Observable } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

export abstract class MonitorService<Model> {
  protected abstract _data: any;

  protected _data$: BehaviorSubject<Model[]> = new BehaviorSubject(null);
  public data$: Observable<Model[]> = this._data$
    .asObservable().pipe(
      filter(item => item !== null),
      debounceTime(2500) // Эффект взаимодействия с сервером
    );

  public fetch(): void {
    this._data$.next(this._data);
  }

  public updateData(newValue: Model): void {
    let data = this._data$.getValue();
    let value = data.find((item: Model) => item['ID'] === newValue['ID']);

    if (value) {
      value = Object.assign(value, newValue);
      this._data$.next(data);
    }
  }
}
