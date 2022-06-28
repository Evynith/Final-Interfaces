import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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



  urlAvatar : string = "assets/extra/Avatar-de-perfil-de-Mirabel-Encanto-agregado-a-Disney.png";
  constructor() { }

  ngOnInit(): void {
  }

 

}
