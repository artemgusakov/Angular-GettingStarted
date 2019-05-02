import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth = 0;
  @Output() notify: Subject<string> = new Subject();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.notify.next(`The rating ${this.rating} was clicked!`);
  }

}
