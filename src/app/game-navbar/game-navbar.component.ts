import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-game-navbar',
  templateUrl: './game-navbar.component.html',
  styleUrls: ['./game-navbar.component.css']
})
export class GameNavbarComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

}
