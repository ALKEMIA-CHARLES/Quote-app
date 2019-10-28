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

  quotes: Quotes[] = [
    new Quotes(
      "Charles Mtawali Jr",
      "Do what inspires you ",
      0,
      0,
      new Date(2019, 5, 23)
    ),
    new Quotes("Raphael Katana", "Slack ME", 0, 0, new Date(2018, 7, 27)),
    new Quotes(
      "Boyd Ndonga",
      "I love failing, it is absolutely okay to fail",
      0,
      0,
      new Date(2017, 12, 23)
    ),
    new Quotes(
      "Abel Mohamed",
      "ሁልጊዜ አዎንታዊ ለመሆን ሁልጊዜ ያስታውሱ",
      0,
      0,
      new Date(2012, 3, 7)
    ),
    new Quotes(
      "Liang Hao",
      "成为您遇到的每个人的尽头",
      0,
      0,
      new Date(2016, 4, 17)
    ),
    new Quotes(
      "Beatrice Labelle",
      "Vous devez vous convaincre que vous êtes le passé, le présent et le futur",
      0,
      0,
      new Date(2014, 7, 10)
    ),
    new Quotes("Michael Jackson", "Heal the world", 0, 0, new Date(2016, 8, 9)),
    new Quotes(
      "Michael Jordan",
      "form is temporary, class is permanent",
      0,
      0,
      new Date(2019, 11, 9)
    ),
    new Quotes(
      "Steve Jobs",
      "Let's change the World",
      0,
      0,
      new Date(2019, 8, 11)
    ),
    new Quotes("Pablo Escobar", "Plata O Plomo", 0, 0, new Date(2017, 8, 10))
  ];

  postQuote(newQuote) {
    newQuote = new Quotes(this.name, this.quote1, 0, 0, new Date());
    this.name = "";
    this.quote1 = "";

    this.quotes.push(newQuote);
  }

  unlike(index) {
    this.quotes[index].downvote += 1;
  }

  like(index) {
    this.quotes[index].upvote += 1;
  }

  delete(index) {
    let toDelete = confirm(
      `are you sure you want to delete ${this.quotes[index].name} quote ?`
    );
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}
}
