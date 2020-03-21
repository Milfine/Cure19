import { Component, OnInit } from '@angular/core';

import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.css']
})
export class GameHomeComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) {}

  districtNames: string[];

  ngOnInit(): void {
    this.districtNames = this.gameService.getNames();
  }

}
