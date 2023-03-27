import { Component, OnInit } from '@angular/core';
import { Textdavinciedit001Service } from '../services/textdavinciedit001.service';

@Component({
  selector: 'app-textdavinciedit001',
  templateUrl: './textdavinciedit001.component.html',
  styleUrls: ['./textdavinciedit001.component.css']
})
export class Textdavinciedit001Component implements OnInit {

  constructor(private textdavinciedit001 : Textdavinciedit001Service) { }

  ngOnInit(): void {
  }

  result :string = "";

  input : string  = "";
  instruction : string = "";

  postCompletition(){

    let myprompt1 = this.input;
    let myprompt2 = this.instruction;

  var payload = { 
    model: "text-davinci-edit-001", 
    input: myprompt1,
    instruction: myprompt2,
    temperature: 0.6 
  }

    this.textdavinciedit001.postCompletion(payload).subscribe((data: any) => {

      console.log(data);
      this.result = data.choices[0].text;
    
    });

  }
}
