import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, withPreloading(PreloadAllModules),
      withRouterConfig({
        onSameUrlNavigation: "reload",
      })
    ), 
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(ToastrModule.forRoot()), 
    { provide: LocationStrategy, useClass: HashLocationStrategy } // Correct way to provide LocationStrategy
  ]
};
