import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  mostrarPlanes : boolean = false;
  urlHeader : string = "assets/extra/wall-pelis1.webp";

  constructor(private activatedRoute: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const data: any = params['seccion'] || null;
        if(data == 'configuracion'){
          this.estadoNum = 3;
        } else if (data == 'facturacion'){
          this.estadoNum = 2;
        } else {
          this.estadoNum = 1;
        }
    });
  }
  estado(num : number){

this.estadoNum = num;  }

}
