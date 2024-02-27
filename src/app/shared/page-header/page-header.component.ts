import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() header: string;
}
