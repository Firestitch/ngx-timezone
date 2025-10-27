import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimezoneAutocompleteComponent } from '../../../../src/app/components/timezone-autocomplete/timezone-autocomplete.component';
import { FormsModule } from '@angular/forms';
import { FsTimezonePipe } from '../../../../src/app/pipes/timezone.pipe';


@Component({
    selector: 'app-timezone',
    templateUrl: './timezone.component.html',
    styleUrls: ['./timezone.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TimezoneAutocompleteComponent,
        FormsModule,
        FsTimezonePipe,
    ],
})
export class TimezoneComponent {

  public timezone = '';

}
