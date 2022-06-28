import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  urlAvatar: string[] = ["assets/extra/image_2022-06-21_19-05-38.png", "assets/extra/image_2022-06-21_18-27-42.png", "assets/extra/image_2022-06-21_18-27-22.png", "assets/extra/image_2022-06-21_18-26-47.png", "assets/extra/image_2022-06-21_18-26-24.png", "assets/extra/Avatar-de-perfil-de-Mirabel-Encanto-agregado-a-Disney.png"];
  estadoNum : number = 1;
  mostrarRepetir : boolean = false;
  valuePass : string = "";

  constructor() { }

  ngOnInit(): void {
  }
  estado(num : number){

this.estadoNum = num;  }

}
