import { Component, Input, OnInit } from '@angular/core';
import { coment } from 'src/app/models/coment';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss']
})
export class OpinionComponent implements OnInit {


  @Input() comentario : coment = new coment;
  @Input() tipo : string | undefined;

  hastaStar : number = -1;
  starsPress : number = -1;
  
  constructor() { }

  ngOnInit(): void {
  }

}
