import { Component, OnInit } from '@angular/core';
import { DataSource1Service } from '../services/data-source1.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public dataSource1Table1: any = null;

  constructor(
    private dataSource1Service: DataSource1Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource1Service.getData('Table 1').subscribe(data => this.dataSource1Table1 = data);
  }
}
