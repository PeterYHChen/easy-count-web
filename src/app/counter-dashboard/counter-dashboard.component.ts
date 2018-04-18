import { Component, OnInit } from '@angular/core';
import { ImageData } from '../image-data';

@Component({
  selector: 'app-counter-dashboard',
  templateUrl: './counter-dashboard.component.html',
  styleUrls: ['./counter-dashboard.component.css']
})
export class CounterDashboardComponent implements OnInit {

  imageData: ImageData = new ImageData();

  constructor() { }

  ngOnInit() {
  }

  onSelectingFile(event: any) {
    const files = event.target.files;
    const file = files[0];
    if (files && file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.imageData.image = btoa(binaryString);
    console.log(this.imageData);
  }
}
