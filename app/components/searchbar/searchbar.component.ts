import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    {
      this._activatedRoute.params.subscribe((params) => {
        console.log(params['name'] + ' running debug');

        this.heroes = this._heroesService.buscarHeroe(params['termino']);
        console.log(this.heroes);
      });
    }
  }

  verHeroe(name: string) {
    this.router.navigate(['/search:', name]);
  }

  ngOnInit() {}
}
