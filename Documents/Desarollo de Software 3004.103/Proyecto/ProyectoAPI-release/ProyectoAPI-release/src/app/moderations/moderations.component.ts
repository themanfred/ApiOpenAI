
import { Component, OnInit } from '@angular/core';
import { ModerationsService } from '../services/moderations.service';

@Component({
  selector: 'app-imagesgeneration',
  templateUrl: './moderations.component.html',
  styleUrls: ['./moderations.component.css']
})
export class ModerationsComponent implements OnInit{

  constructor(private moderations : ModerationsService) { }

  ngOnInit(): void {
  }

  mod : string  = "";
  resultBool: boolean = false;
  result : string  = "";

  postCompletition(){

    let myprompt = this.mod;

  var payload = {
    input: myprompt,
  }

    this.moderations.postCompletion(payload).subscribe((data: any) => {
	      console.log(data);
        this.resultBool = data.results[0].flagged;
        this.result = this.resultBool.toString();
    });
  }
}
