import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    console.log(termino + '    navbar componente dato: ');
    //this._service.buscarHeroe(termino);
    this.router.navigate(['/buscar', termino]);
  }
}
