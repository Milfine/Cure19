import { Injectable } from '@angular/core';

import { District } from '../../models/district';
import { Country } from '../../models/country';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  districts: District[] = [
    {
      id:         1,
      name:       'Lower Silesian',
      residents:  2901000,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    },
    {
      id:         2,
      name:       'Kuyavian-Pomeranian',
      residents:  2079900,
      cases:      0,
      deaths:     0,
      recovered:  0,
      policies:   []
    },
    {
      id:         3,
      name:       'Lublin',
      residents:  2121600,
      cases:      134,
      deaths:     2,
      recovered:  7,
      policies:   []
    }
  ];
  country: Country = {
    id:         1,
    name:       'Dolnośląskie',
    residents:  37980000,
    cases:      0,
    deaths:     0,
    recovered:  0,
    policies:   []
  }

  money: number;
  realtions: number;


  // Functions
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

  getMoney() {
    return this.money;
  }

  getRealtions() {
    return this.money;
  }


}
