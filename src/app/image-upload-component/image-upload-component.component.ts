import { Component, OnInit } from '@angular/core';

class ImageSnippet {
	constructor(public src:string, public file: File) {

	}
}

@Component({
  selector: 'app-image-upload-component',
  templateUrl: './image-upload-component.component.html',
  styleUrls: ['./image-upload-component.component.css']
})
export class ImageUploadComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedFile: ImageSnippet;

  processFile(ImageInput : any) {
  	const file : File = ImageInput.files[0];
  	const reader = new FileReader();
  	debugger;
  	reader.addEventListener('load', (event: any) => {
  		debugger;
  		this.selectedFile = new ImageSnippet(event.target.result, file);
  	});
  	reader.readAsDataURL(file);
  }

}
