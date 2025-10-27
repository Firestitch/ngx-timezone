import { Component } from '@angular/core';
import { environment } from '@env';
import { FsExampleModule } from '@firestitch/example';
import { TimezoneComponent } from '../timezone/timezone.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [FsExampleModule, TimezoneComponent]
})
export class ExamplesComponent {
  public config = environment;
}
