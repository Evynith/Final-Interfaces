import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() linkRedirect: string | undefined;
  @Input() btnType: string | undefined;
  @Input() btnText: string | undefined;
  @Input() background: string = 'btn-primary';

  typeObj: string | undefined;

  //linkRedirect: string = "";
  //btnType:string = "";
  
  constructor(private router:Router) { 
 
  }
  
  ngOnInit(): void {
    this.typeObj =
    this.btnType == "thumbUp" ? "thumb_up" :
    this.btnType == "thumbDown" ? "thumb_down_off_alt" :
    this.btnType == "star" ? "star" :
    this.btnType == "starHalf" ? "star_half" :
    this.btnType == "starOutline" ? "star_outline" :
    this.btnType == "volume" ? "volume_up" :
    this.btnType == "turned" ? "turned_in_not" :
    this.btnType == "filterList" ? "filter_list" :
    this.btnType == "notifications" ? "notifications" :
    this.btnType == "add" ? "add" :
    this.btnType == "addCircle" ? "add_circle_outline" :
    this.btnType == "addAcordeon" ? "add" :
    this.btnType == "close" ? "close" :
    this.btnType == "emoji" ? "emoji_emotions" :
    this.btnType == "arrowFordward" ? "arrow_forward_ios" :
    this.btnType == "arrowBack" ? "arrow_back_ios" :
    this.btnType == "playArrow" ? "play_arrow" :
    this.btnType == "info" ? "info" :
    this.btnType == "search" ? "search" :
    this.btnType == "playCircle" ? "play_circle" :
    this.btnType == "replay" ? "replay" :
    undefined;
  }

  action() {
    if ( this.btnType != "playCircle" && this.btnType != "addAcordeon" && this.btnType != "volume" && this.btnType != "filter" && this.btnType != "turned" ){
      if (this.linkRedirect != undefined){
        this.router.navigate([this.linkRedirect]);
      }
    } 

      if(this.typeObj == "volume_up" || this.typeObj == "volume_off")
      this.typeObj = this.typeObj == "volume_up" ? "volume_off" : "volume_up";
      if(this.typeObj == "filter_list"|| this.typeObj == "filter_list_off")
      this.typeObj = this.typeObj == "filter_list" ? "filter_list_off" : "filter_list";
      if(this.typeObj == "turnedInNot" || this.typeObj == "turnedIn")
      this.typeObj = this.typeObj == "turnedInNot" ? "turnedIn" : "turnedInNot";
      if(this.typeObj == "add" || this.typeObj == "close")
      this.typeObj = this.typeObj == "add" ? "close" : "add";
      if(this.typeObj == "play_circle" || this.typeObj == "pause_circle")
      this.typeObj = this.typeObj == "pause_circle" ? "play_circle" : "pause_circle";
    
  }
}
