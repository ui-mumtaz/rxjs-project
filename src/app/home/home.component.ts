import { Component, OnInit } from '@angular/core';
import { RxjsDemoService } from '../services/rxjs-demo.service';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _service: RxjsDemoService, private dateService: DateService) { }

  ngOnInit(): void {
    //1. Explain how you have used map, mergeMap, and switchMap operators in RxJS.
    this._service.exampleMap().subscribe(x => console.log('Map=> ', x))
    this._service.exampleMergeMap().subscribe(x => console.log('MergeMap=> ', x))
    this._service.exampleSwitchMap().subscribe(x => console.log('SwitchMap=> ', x))

    //2. Explain how you have used moment-timezone to convert UTC date to local date.
    const utcDate = this.dateService.getUTCDate();
    console.log('UTC Date:', utcDate);
    const localDate = this.dateService.convertToLocal(utcDate, 'Asia/Kolkata');
    console.log('Local Date:', localDate);

    //3. Understanding Firestore Limitations
    //Limited Query Capabilities: Firestore does not support complex queries involving multiple inequality filters on different fields.
    //Pricing Model: The pricing model is based on the number of reads, writes, and deletes, which can become expensive for applications with high read/write operations.
    //Offline Support: Managing conflicts and ensuring data consistency when the application comes back online can be challenging.
  }

}
