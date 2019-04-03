import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpen = false;
//Método para fazer "abrir" o botão do menu, quando responsivo.
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
