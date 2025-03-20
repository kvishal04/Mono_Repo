import { Component } from '@angular/core';
import { VantaBackgroundComponent } from "../../../components/vanta-background/vanta-background.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [VantaBackgroundComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
