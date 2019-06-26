import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.scss']
})
export class TestServiceComponent implements OnInit {

  constructor(private testserviceservice: TestServiceService) { }

  ngOnInit() {
    this.testserviceservice.GetData();
  }

}
