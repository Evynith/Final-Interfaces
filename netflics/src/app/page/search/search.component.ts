import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  urlHeader : string = "assets/extra/wall-pelis1.webp";
  constructor() { }

  ngOnInit(): void {
  }

}
