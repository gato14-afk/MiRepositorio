import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2'
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardproductoTarjetaComponent } from './components/cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CardproductoComponent } from './components/cardproducto/cardproducto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent,CardproductoTarjetaComponent,CardproductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mundo';
  constructor(){
    //Swal.fire("SweetAlert2 is working!");
  }
  myFunction(){
    //const Swal = require('sweetalert2');
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Something went wrong!",
    //   footer: '<a href="#">Why do I have this issue?</a>'
    // });
  }
}


