import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit {
  @Input('isFlipped') flipCard: boolean;
  constructor() { }

  ngOnInit() {}

}
