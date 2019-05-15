import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

    public galleryImages : [];

    constructor(private imageService : ImageService) {
        this.imageService.getAllImages().subscribe(
            (x)=>{
                console.log(x);
                this.galleryImages = x;
            },
            (x)=>{
                console.log(x);
            });
     }
 
    ngOnInit(): void {
 
    }
}
