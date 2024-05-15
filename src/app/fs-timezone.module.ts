import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { FsAutocompleteModule } from '@firestitch/autocomplete';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TimezoneAutocompleteComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatIconModule,
    FsAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [
    TimezoneAutocompleteComponent,
  ],
  exports: [
    TimezoneAutocompleteComponent,
  ],
})
export class FsTimezoneModule {
 
}
