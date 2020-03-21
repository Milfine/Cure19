import { Injectable } from '@angular/core';

import { District } from '../../models/district';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  districts: District[] = [
    {
      id:         0,
      name:       'Dolnośląskie',
      residents:  1000,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    },
    {
      id:         1,
      name:       'Kujawsko-Pomorskie',
      residents:  1000,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    },
    {
      id:         2,
      name:       'Lubelskie',
      residents:  1000,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    }
  ];

  getNames() {
    return [
      this.districts[0].name,
      this.districts[1].name,
      this.districts[2].name
    ]
  }


}
