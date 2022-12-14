import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {}

  
}
