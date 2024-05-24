import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { FsAutocompleteModule } from '@firestitch/autocomplete';

import { TimezoneAutocompleteComponent } from './components';
import { FsTimezonePipe } from './pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
        
    MatIconModule,  
    MatFormFieldModule,
    MatSelectModule,

    FsAutocompleteModule,
  ],
  declarations: [
    TimezoneAutocompleteComponent,
    FsTimezonePipe,
  ],
  exports: [
    TimezoneAutocompleteComponent,
    FsTimezonePipe,
  ],
})
export class FsTimezoneModule {
 
}
