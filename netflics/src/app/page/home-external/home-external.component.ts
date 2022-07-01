import {AfterViewInit, Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ButtonComponent } from 'src/app/component/button/button.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-home-external',
  templateUrl: './home-external.component.html',
  styleUrls: ['./home-external.component.scss']
})
export class HomeExternalComponent implements OnInit, AfterViewInit {

  constructor(private login : LoginService, private router : Router) { }


  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
  }
  lugar : number = 1;
  modalCrearCuenta : boolean = false;
  modalIngresar  : boolean = false;
  bienvenida : boolean  = false;
  lugarHeader : number = window.innerWidth;
  urlAvatar : string = "assets/extra/Avatar-de-perfil-de-Mirabel-Encanto-agregado-a-Disney.png";
  ultimoModal : HTMLElement | undefined;
  spinner : boolean = false;

  cargarUsuario(){
    this.spinner = true;
    this.bienvenida = true;
    setTimeout(()=> {
      this.spinner = false;
    }, 2000);
  }

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

  cerrarModalIng(){
    this.modalIngresar = false;
  }

  cerrarOtroModal(modal : number) {
    if (modal == 1){
      this.modalIngresar = false;
    }
   if (modal ==2){
    this.modalCrearCuenta = false;
   }
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

  animacion.finished.then(()=>{this.cerrarModalCC(); this.cerrarModalIng();});

  }

  entrarSesion() {
    LoginService.login = true ;
    this.router.navigate(['/']);
  }

}
