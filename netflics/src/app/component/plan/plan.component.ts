import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Input() resaltado : boolean = false;
  @Input() precio : number | undefined;
  @Input() calidad : string|undefined;
  @Input() dispositivos : number |undefined;
  @Input() contenido : string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
