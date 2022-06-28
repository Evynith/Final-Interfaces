import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { audiovisual } from 'src/app/models/audiovisual';
import { ModalService } from 'src/app/service/modal.service';
import { ButtonComponent } from 'src/app/component/button/button.component';

@Component({
  selector: 'app-home-internal',
  templateUrl: './home-internal.component.html',
  styleUrls: ['./home-internal.component.scss']
})
export class HomeInternalComponent implements OnInit {

  @ViewChild('btnVerInfo')
  btnVerInfo!: ElementRef;
  mostrarModal : boolean = false;
  pelicula: audiovisual = new audiovisual;
  mostrarVideo = true;
  presionado : boolean = false;
  reproduciendoModal : boolean = false;
  reproduciendoHome : boolean = false;

  mostrarVideoModal = true;
  @ViewChild('videoPlayerModal')
  videoplayerModal!: ElementRef;
  @ViewChild('trailerBtnModal')
  trailerBtnModal!: ButtonComponent;
  @ViewChild('trailerBtnModal')
  trailerBtn2Modal!: ElementRef;


  constructor(private modalcito : ModalService) {   }

  ngAfterViewInit () {
    this.mostrarVideo
  }
  ngOnInit(): void {
    this.modalcito.$modal.subscribe(
        (valorNuevo) => {
          this.mostrarModal = valorNuevo;
        }
    )//escucho
  }

  toggleVideoModal() {
    if ( this.trailerBtnModal.typeObj == 'play_circle' ) {
      this.videoplayerModal.nativeElement.pause();
    } else if (this.trailerBtnModal.typeObj == 'pause_circle') {
      this.videoplayerModal.nativeElement.play();
    } else {
      this.mostrarVideoModal = true;
      this.videoplayerModal.nativeElement.currentTime = 0;
     // this.videoplayer.nativeElement.load();
      this.videoplayerModal.nativeElement.play();
      //this.trailerBtn2.nativeElement.click();
    
    }
  }

 ocultarModal(){
     this.mostrarModal = false;
  }

}
