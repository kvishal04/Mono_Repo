import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private currentTheme = '';

  setTheme(theme: string) {
    if (theme) {
      this.removeAllClass(theme)
      console.log('light-theme',document.body.classList)
      this.currentTheme = theme;
      document.body.classList.add(theme);
      localStorage.setItem('theme', theme);
    } else {
      // Handle the case where the theme is an empty string
      this.currentTheme = '';
      localStorage.removeItem('theme');
    }
    }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || '';
    this.setTheme(savedTheme);
  }

  removeAllClass(theme: string){
    if( document.body.classList.length > 0){

      if(document.body.classList.contains('light-theme')){
        document.body.classList.replace('light-theme',theme)
      }
      if(document.body.classList.contains('dark-theme')){
        document.body.classList.replace('dark-theme', theme)
      }
      if(document.body.classList.contains('purple-theme')){
        document.body.classList.replace('purple-theme', theme)
      }
    }
  }
}
