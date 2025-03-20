import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from "../../Module/sidebar/sidebar.component";
import { HeaderComponent } from "../../Module/header/header.component";
import { BottombarComponent } from "../../Module/bottombar/bottombar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeaderComponent, BottombarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {


  ngOnInit(): void {
    initFlowbite()
  }
}
