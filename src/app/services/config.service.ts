import { Inject, Injectable } from '@angular/core';
import { routeConfig } from './routeConfig';
import { routeConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(routeConfigToken) private configToken:routeConfig) { 
    console.log('config initialised');
    console.log(this.configToken);
  }
}
