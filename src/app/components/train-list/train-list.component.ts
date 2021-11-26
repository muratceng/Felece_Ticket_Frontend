import { Component, OnInit } from '@angular/core';
import { TrainService } from 'src/app/services/train.service';
import { Train } from 'src/app/common/train';


@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {
  trains!:Train[];

  constructor(private trainService:TrainService) { }

  ngOnInit(): void {
    this.listTrains();
  }

  listTrains() {
    this.trainService.getTrainList().subscribe(
      data => {
        this.trains = data;
      }
    )
  }
}
