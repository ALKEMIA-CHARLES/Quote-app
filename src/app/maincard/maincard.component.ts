import { Component, OnInit } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-maincard",
  templateUrl: "./maincard.component.html",
  styleUrls: ["./maincard.component.css"]
})
export class MaincardComponent implements OnInit {
  name: string = "";
  quote1: string = "";
  new_quote: Quotes;

  quotes: Quotes[] = [
    (this.new_quote = new Quotes(
      "Charles Mtawali Jr",
      "Do what inspires you ",
      0,
      0,
    )),
    (this.new_quote = new Quotes(
      "Abel Mohamed", "ሁልጊዜ አዎንታዊ ለመሆን ሁልጊዜ ያስታውሱ", 0, 0
    )),
    (this.new_quote = new Quotes("Liang Hao", "成为您遇到的每个人的尽头", 0, 0)),
    (this.new_quote = new Quotes("Beatrice Labelle", "Vous devez vous convaincre que vous êtes le passé, le présent et le futur", 0,0)),
    (this.new_quote = new Quotes("Michael Jackson", "Heal the world", 0, 0)),
    (this.new_quote = new Quotes("Michael Jordan", "form is temporary, class is permanent", 0, 0)),
    (this.new_quote = new Quotes("Steve Jobs", "Let's change the World", 0, 0)),
    (this.new_quote = new Quotes("Pablo Escobar", "Plata O Plomo", 0, 0))
  ];

  postQuote() {
    this.new_quote = new Quotes(this.name, this.quote1, 0, 0);
    this.name = "";
    this.quote1 = "";
    this.quotes.push(this.new_quote);
  }

  unlike(index) {
    this.quotes[index].downvote += 1;
  }

  like(index) {
    this.quotes[index].upvote += 1;
  }
  constructor() {}

  ngOnInit() {}
}
