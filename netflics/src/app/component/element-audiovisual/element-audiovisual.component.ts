import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { audiovisual } from 'src/app/models/audiovisual'
import { ButtonComponent } from 'src/app/component/button/button.component';

@Component({
  selector: 'app-element-audiovisual',
  templateUrl: './element-audiovisual.component.html',
  styleUrls: ['./element-audiovisual.component.scss']
})
export class ElementAudiovisualComponent implements OnInit {


  element: audiovisual = new audiovisual;
  mouseHover : boolean = false;
  mostrarVideo : boolean = true;
  reproduciendo : boolean = false;

  @Input() sizeContainer: string = "little";
  @Input() typeContainer: string = "default";
  @Input() numElement: number | undefined;
  @ViewChild('videoPlayer')
  videoplayer!: ElementRef;
  @ViewChild('trailerBtn')
  trailerBtn!: ButtonComponent;
  @ViewChild('trailerBtn')
  trailerBtn2!: ElementRef;

// toggleVideo() {
//     this.videoplayer.nativeElement.currentTime = 0;
//     this.videoplayer.nativeElement.play();
// }

toggleVideo() {
  if ( this.trailerBtn.typeObj == 'play_circle' ) {
    this.videoplayer.nativeElement.pause();
  } else if (this.trailerBtn.typeObj == 'pause_circle') {
    this.videoplayer.nativeElement.play();
  } else {
    this.mostrarVideo = true;
    this.videoplayer.nativeElement.currentTime = 0;
   // this.videoplayer.nativeElement.load();
    this.videoplayer.nativeElement.play();
    //this.trailerBtn2.nativeElement.click();
  
  }
}
  constructor(private modalcito : ModalService ) { }

  ngOnInit(): void {
    
  }

  mostrarModal(){
    //this.mostrarModal = true;
    this.modalcito.$modal.emit(true);
  }

}
