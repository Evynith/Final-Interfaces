import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // @ViewChild('navegador')
  // nav!: HTMLElement;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let nav = document.querySelector('nav') as HTMLElement;

      if (window.scrollY > nav.clientHeight) {
        nav.classList.add('navbar-inverse');
      } else {
        nav.classList.remove('navbar-inverse');
      }
  }

  inputBuscar : boolean = false;
  urlAvatar : string = "assets/extra/Avatar-de-perfil-de-Mirabel-Encanto-agregado-a-Disney.png";
  constructor(private login : LoginService, private router : Router) { }

  get loged() {
    return LoginService.login;
  }
  ngOnInit(): void {
  }

  mostrarMenu(menuPerfil: HTMLElement){
    menuPerfil.classList.toggle('mostrarMenu');
  }


  cerrarSesion() {
    LoginService.login = false ;
    this.router.navigate(['/']);
  }

}
