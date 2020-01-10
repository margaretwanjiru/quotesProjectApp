import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuotesFormComponent } from '../quotes-form/quotes-form.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index,1);
    }

  }
   quotes:Quote[] =[
    new Quote(1, 'Maggy Irungu', 'When you kill someones vision its not him  that suffers but the people that depend on him.So dont destroy someone because you hate him,think of the innocent people that are behind him for survival', new Date (2013,12,14)),
    new Quote(2, 'Dr.Ben Carson', 'Do your Best and God will do the rest', new Date (2014,2,19)),
    new Quote(3, 'Liam Felix', 'Life is a gift.Never forget to enjoy and bask in every moment you are in.', new Date (2018,6,31)),
   ];

toggleDetails(index){
    this.quotes[index].showDeScription =!this.quotes[index].showDeScription;
}

newQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}

deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }
    }
}
  constructor() { }

  ngOnInit() {
  }

}
