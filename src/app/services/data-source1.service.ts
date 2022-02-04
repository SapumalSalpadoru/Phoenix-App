import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource1 } from './data-source-1';

@Injectable({
  providedIn: 'root'
})
export class DataSource1Service {
  public getData(tableName: string): Observable<any> {
    return of(DataSource1[tableName]);
  }
}
