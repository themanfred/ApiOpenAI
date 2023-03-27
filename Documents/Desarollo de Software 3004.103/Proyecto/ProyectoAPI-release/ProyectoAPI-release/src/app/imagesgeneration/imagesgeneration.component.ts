
import { Component, OnInit } from '@angular/core';
import { ImagesgenerationService } from '../services/imagesgeneration.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './imagesgeneration.component.html',
  styleUrls: ['./imagesgeneration.component.css']
})
export class ImagesgenerationComponent implements OnInit{

  constructor(private imagesgeneration : ImagesgenerationService) { }

  ngOnInit(): void {
  }

  imagen : string  = "";
  result :string = "";

  postCompletition(){

    let myprompt = this.imagen;

  var payload = {
    prompt: myprompt,
    response_format: "url"
  }

    this.imagesgeneration.postCompletion(payload).subscribe((data: any) => {
	      console.log(data);
        this.result = data.data[0].url;
    });
  }
}
