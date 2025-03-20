import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private currentTheme: 'dark' | 'light' = 'light';

  setTheme(theme: string) {
    if (theme === 'dark') {
      this.currentTheme = theme;
      document.documentElement.classList.add(theme);
    } else {
      // Handle the case where the theme is an empty string
      this.currentTheme = 'light';
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme') || '';
    this.setTheme(savedTheme);
  }
}
