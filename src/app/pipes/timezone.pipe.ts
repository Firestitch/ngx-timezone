import { Pipe, PipeTransform } from '@angular/core';

import { FsTimezone } from '../services';


@Pipe({
    name: 'fsTimezone',
    standalone: true
})
export class FsTimezonePipe implements PipeTransform {
  
  constructor(
    private _timezone: FsTimezone,
  ) {}

  public transform(identifier: string): string {

    const timezone = this._timezone.timezones
      .find((item) => item.identifier === identifier);

    return timezone?.description || '';
  }
}
