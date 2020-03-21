import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { GameService } from '../services/game.service';
import { District } from '../../models/district';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Input() id;
  constructor(
    private gameService: GameService
  ) {}

  district: District;

  ngOnInit(): void {
    this.district = this.gameService.getDistrict(this.id - 1);
  }

  ngOnChanges(): void {
    this.district = this.gameService.getDistrict(this.id - 1);
  }

}
