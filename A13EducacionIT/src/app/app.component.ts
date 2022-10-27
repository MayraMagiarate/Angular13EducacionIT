import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A13EducacionIT';
  tarjVisible=false;
  artVisible=false;
  verTarj(){
    this.tarjVisible=true;
    this.artVisible=false;
  }
  verArt(){
    this.artVisible=true;
    this.tarjVisible=false;
  }
}
