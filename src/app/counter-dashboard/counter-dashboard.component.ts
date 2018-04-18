import { Component, OnInit } from '@angular/core';
import { ImageData } from '../image-data';
import { FileService } from '../services/file-service';

@Component({
  selector: 'app-counter-dashboard',
  templateUrl: './counter-dashboard.component.html',
  styleUrls: ['./counter-dashboard.component.css'],
  providers: [FileService]
})
export class CounterDashboardComponent implements OnInit {

  imageData: ImageData = new ImageData();

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  onSelectingFile(event: any) {
    const files = event.target.files;
    const file = files[0];
    if (files && file) {
      const reader: FileReader = new FileReader();

      reader.onloadend = (e) => {
        this.imageData.image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadImage() {
    if (!this.imageData.image) {
      alert('Need to specific image');
      return;
    }

    if (!this.imageData.objectMinRadius) {
      alert('Need to specific objectMinRadius');
      return;
    }

    if (!this.imageData.objectMaxRadius) {
      alert('Need to specific objectMaxRadius');
      return;
    }

    if (!this.imageData.objectColor) {
      alert('Need to specific objectColor');
      return;
    }

    this.fileService.evaluateImage(this.imageData)
      .subscribe(
        response => {
          this.imageData = ImageData.parse(response);
        }, err => {
          console.log('error: ' + err);
        }
      );
  }
}
