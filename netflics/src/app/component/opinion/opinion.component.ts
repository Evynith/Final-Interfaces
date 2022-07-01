import { Component, ElementRef, Input, OnInit } from '@angular/core';
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
  mostrarAnim(fanta : number, event : MouseEvent){
    let newDiv = document.createElement("span");
    newDiv.classList.add("material-icons-outlined");
    newDiv.classList.add("nodoFantasma");
    if ( fanta == 1 ) {
      newDiv.textContent = "thumb_up";
    } else {
      newDiv.textContent = "thumb_down_off_alt";
    }

    newDiv.style.zIndex = "190";
    newDiv.style.position = "absolute";
    newDiv.style.left = event.pageX + "px";
    newDiv.style.top = event.pageY + "px";
    newDiv.style.animation = "movlike 1.1s";

    document.body.appendChild(newDiv);

    setTimeout(()=>{
     newDiv.remove();
    }, 1000)


  }

}
