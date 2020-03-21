import { Injectable } from '@angular/core';

import { District } from '../../models/district';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  districts: District[] = [
    {
      id:         1,
      name:       'Dolnośląskie',
      residents:  1000,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    },
    {
      id:         2,
      name:       'Kujawsko-Pomorskie',
      residents:  1000,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    },
    {
      id:         3,
      name:       'Lubelskie',
      residents:  1000,
      cases:      134,
      deaths:     2,
      recovered:  7,
      policies:   []
    }
  ];

  getNames() {
    return [
      [1, this.districts[0].name],
      [2, this.districts[1].name],
      [3, this.districts[2].name]
    ]
  }

  getDistrict(value) {
    return this.districts[value];
  }


}
