import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  starWidth = 0;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.rating);
    this.starWidth = this.rating * 75 / 5;
    console.log(this.starWidth);
  }

  onClick(): void {
    this.notify.emit(`The rating ${this.rating} was clicked!`);
  }

}
