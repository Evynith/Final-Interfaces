import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-audiovisual',
  templateUrl: './list-audiovisual.component.html',
  styleUrls: ['./list-audiovisual.component.scss']
})
export class ListAudiovisualComponent implements OnInit {

  @Input() lugar: number = 2;
  @Input() typeList: string = "default";
  ngOnInit(): void {
  }

}
