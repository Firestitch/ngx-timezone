import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'fs-clipboard',
  templateUrl: './clipboard.component.html',
  styleUrls: ['./clipboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsClipboardComponent {

  @Input() public content: string | (() => string) | HTMLElement;
  @Input() public tooltip = 'Copy to clipboard';

}
