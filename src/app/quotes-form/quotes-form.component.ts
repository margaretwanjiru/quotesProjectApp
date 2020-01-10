import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote'
import { QuotesDetailComponent} from '../quotes-detail/quotes-detail.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
 
  newQuote = new Quote(0, '', '', new Date());

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote(0, '', '', new Date());
      
  }
  constructor() { }

  ngOnInit() {
  }

}
