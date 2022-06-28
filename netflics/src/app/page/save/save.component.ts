import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  urlHeader : string = "assets/extra/wall-pelis1.webp";
  constructor() { }

  ngOnInit(): void {
  }

}
