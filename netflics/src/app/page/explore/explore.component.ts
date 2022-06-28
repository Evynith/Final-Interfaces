import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/component/button/button.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  filtro : boolean = false;
  urlHeader : string = "assets/extra/wall-pelis1.webp";
  constructor() { }

  ngOnInit(): void {
  }

  toggleFiltro(btn: ButtonComponent) {
    this.filtro = this.filtro == true ? false : true;
  
  }
}
