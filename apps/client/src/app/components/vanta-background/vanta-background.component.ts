import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
declare var VANTA: any;
@Component({
  selector: 'app-vanta-background',
  standalone: true,
  imports: [],
  templateUrl: './vanta-background.component.html',
  styleUrl: './vanta-background.component.scss'
})
export class VantaBackgroundComponent implements OnInit {
  private vantaEffect: any;

  constructor() { }

  ngOnInit() {

    VANTA.NET({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })

}
}
