import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public headtheme: string = ''
  constructor(private theme: ThemeService){
    this.headtheme = this.theme.getCurrentTheme()
  }
  ngOnInit(): void {
    initFlowbite();
  
  }

  changeTheme(mode: string) {
    this.theme.setTheme(mode);
    this.headtheme = mode;
  }



}
