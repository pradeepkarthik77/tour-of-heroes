import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService){}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getTop5();
  }

  getTop5()
  {
    this.heroService.getHeroes().subscribe(herolist => this.heroes = herolist);
    this.heroes = this.heroes.slice(0,5);
  }

}
