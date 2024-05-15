import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimezoneComponent {

  public timezone = '';

}
