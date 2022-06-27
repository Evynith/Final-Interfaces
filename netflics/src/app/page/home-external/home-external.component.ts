import {Component, HostListener, Input, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/component/button/button.component';

@Component({
  selector: 'app-home-external',
  templateUrl: './home-external.component.html',
  styleUrls: ['./home-external.component.scss']
})
export class HomeExternalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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


}
