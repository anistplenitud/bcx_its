import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

class ImageSnippet {
	pending: boolean = false;
	status: string = 'init';
	clear: string = 'init';

	constructor(public src:string, public file: File) {

	}
}

@Component({
  selector: 'app-image-upload-component',
  templateUrl: './image-upload-component.component.html',
  styleUrls: ['./image-upload-component.component.css']
})
export class ImageUploadComponentComponent implements OnInit {

  constructor(private imageService : ImageService) { }

  ngOnInit() {
  }

  private onSuccess() {
  	this.selectedFile.pending = false;
  	this.selectedFile.status = 'ok';
  	this.selectedFile.clear = 'show';
  }

  private onError() {
  	this.selectedFile.pending = false;
  	this.selectedFile.status = 'fail';
  	this.selectedFile.src = '';
  }

  selectedFile: ImageSnippet;

  clearFile() {
  	this.selectedFile.clear = 'clear';
  }

  processFile(ImageInput : any) {
  	const file : File = ImageInput.files[0];
  	const reader = new FileReader();

  	
  	reader.addEventListener('load', (event: any) => {
  		//debugger;
  		this.selectedFile = new ImageSnippet(event.target.result, file);
  		this.selectedFile.clear = 'show';
  		this.selectedFile.pending = true;

  		this.imageService.uploadImage(this.selectedFile.file).subscribe(
  			(x) => {
  			//	debugger;
  				this.onSuccess();
  				console.log(x);
  				console.log("Looks OK");
  			},
  			() => {
  				console.log("Something went wrong");
  				this.onError();
  			//	debugger;
  			}
  		);
  	});
  	reader.readAsDataURL(file);
  }

}
