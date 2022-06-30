import {AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { timeout } from 'rxjs';
import { ButtonComponent } from 'src/app/component/button/button.component';

@Component({
  selector: 'app-home-external',
  templateUrl: './home-external.component.html',
  styleUrls: ['./home-external.component.scss']
})
export class HomeExternalComponent implements OnInit, AfterViewInit {

  constructor() { }
  //@ViewChild('menuHeader') menuHeader?: HTMLElement;

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
  }
  lugar : number = 1;
  modalCrearCuenta : boolean = false;
  lugarHeader : number = window.innerWidth;

  acordeon(acordeonElement : HTMLElement, element: ButtonComponent) {
    element.action();
    let acordeonElements = document.querySelectorAll('.box-acordeon > div');
    acordeonElements.forEach(element =>
      {
        if (element != acordeonElement)
           element.classList.add("hidden");
       }
    );
    acordeonElement.classList.toggle("hidden");
  }

  moverHeaderIn(){
    //6rem = 96px
    let menuHeader =  document.querySelector<HTMLElement>('.menuHeader');
    if ( menuHeader!.getBoundingClientRect().width -  (window.innerWidth - (450 + 96)) >=3){
     // console.log(menuHeader?.getBoundingClientRect().width,  (window.innerWidth - (450 + 96)) );
      let animacion = menuHeader?.animate([
        // w: 450 + 3rem de padding
        { width: '100vw' },
        { width: 'calc(100vw - (450px + 6rem))' }
      ], {
        // opciones de sincronización
        duration: 1000,
        iterations: 1
      });

      animacion?.finished.then(()=>{ menuHeader!.style.width = "calc(100vw - (450px + 6rem))";});

    }
  }

  moverHeaderOut(){
  //6rem = 96px
  let menuHeader =  document.querySelector<HTMLElement>('.menuHeader');
  //console.log( menuHeader!.getBoundingClientRect().width ,   (window.innerWidth - (450 + 96 - 3))   );
  if ( menuHeader!.getBoundingClientRect().width <=   (window.innerWidth - (450 + 96 - 3)) ){
    let animacion = menuHeader?.animate([
      // w: 450 + 3rem de padding
      { width: 'calc(100vw - (450px + 6rem))' },
      { width: '100vw' }
    ], {
      // opciones de sincronización
      duration: 1000,
      iterations: 1
    });

    animacion?.finished.then(()=>{ menuHeader!.style.width = "100vw";});

  }
  }

  cerrarModalCC(){
    this.modalCrearCuenta = false;
  }

  cerrarModalForm(modal : HTMLElement) {
   let animacion = modal.animate([
    // fotogramas clave
    { right: '3vw' },
    { right: '-50vw' }
  ], {
    // opciones de sincronización
    duration: 1000,
    iterations: 1
  });
  this.moverHeaderOut();

  animacion.finished.then(()=>{this.cerrarModalCC();});

  }

}
