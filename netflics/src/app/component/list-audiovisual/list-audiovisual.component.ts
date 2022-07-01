import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-audiovisual',
  templateUrl: './list-audiovisual.component.html',
  styleUrls: ['./list-audiovisual.component.scss']
})
export class ListAudiovisualComponent implements OnInit {

  @Input() lugar: number = 2;
  @Input() typeList: string = "default";
  ngOnInit(): void {
  }

  moverDerecha(listaMover : HTMLElement){
    let elem = listaMover.querySelector(".listCorta") as HTMLElement;
    let animacion = elem.animate([
      // fotogramas clave
      { transform: 'translatex(0)' },
      { transform: 'translatex(-25%)' }
    ], {
      // opciones de sincronización
      duration: 1500,
      iterations: 1
    });
  }

  moverIzquierda(listaMover : HTMLElement){
    let elem = listaMover.querySelector(".listCorta") as HTMLElement;
    let animacion = elem.animate([
      // fotogramas clave
      { transform: 'translatex(0)' },
      { transform: 'translatex(25%)' }
    ], {
      // opciones de sincronización
      duration: 1500,
      iterations: 1
    });
  }
}
