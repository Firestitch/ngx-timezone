import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

import { guid } from '@firestitch/common';

import { Observable, of } from 'rxjs';

import { FsTimezone } from '../../services';
import { FsAutocompleteModule } from '@firestitch/autocomplete';


@Component({
    selector: 'fs-timezone-autocomplete',
    templateUrl: './timezone-autocomplete.component.html',
    styleUrls: ['./timezone-autocomplete.component.scss'],
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: TimezoneAutocompleteComponent,
            multi: true,
        }],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [FsAutocompleteModule, FormsModule],
})
export class TimezoneAutocompleteComponent implements ControlValueAccessor {
  private _timezoneService = inject(FsTimezone);


  @Input() public placeholder = 'Timezone';
  @Input() public required = false;
  @Input() public disabled = false;

  @Input() public browserDefault = false;
  @Output() public timezoneChange = new EventEmitter<string>();

  public timezone;
  public timezones: any[] = [];
  public name = guid();

  public onChange: (value) => void;
  public onTouch: (value) => void;

  constructor() {
    this.timezones = this._timezoneService.timezones;
  }

  public writeValue(value: any): void {
    this.timezone = this.timezones
      .find((item) => item.identifier === value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    //
  }

  public fetch = (keyword: string): Observable<any> => {
    keyword = keyword.toLowerCase();
    const timezones = this._timezoneService.timezones
      .filter((timezone) => {
        return !keyword || timezone.description.toLocaleLowerCase().indexOf(keyword) !== -1;
      });

    return of(timezones);
  };

  public displayWith = (timezone) => {
    if(!timezone) {
      return '';
    }
   
    return timezone?.description;
  };


  public change(value): void {
    this.onChange(value?.identifier || null);
  }

  public opened(): void {
    if(!this.timezone) {
      const el = document
        .querySelector(`.timezone-autocomplete .timezone-autocomplete-option[data-attr="${this._timezoneService.timezone}"]`);
        
      el?.scrollIntoView({ block:'center' });
    }
  }

}
