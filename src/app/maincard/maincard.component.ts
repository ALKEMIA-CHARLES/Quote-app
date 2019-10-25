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
    new Quotes("Charles Mtawali Jr", "Do what inspires you "),
    new Quotes("Abel Mohamed", "ሁልጊዜ አዎንታዊ ለመሆን ሁልጊዜ ያስታውሱ"),
    new Quotes("Liang Hao", "成为您遇到的每个人的尽头"),
    new Quotes(
      "Beatrice Labelle",
      "Vous devez vous convaincre que vous êtes le passé, le présent et le futur"
    )
  ];

  postQuote() {
    let new_quote = new Quotes(this.name, this.quote1);
    this.name = "";
    this.quote1 = "";
    this.quotes.push(new_quote);
  }

  constructor() {}

  ngOnInit() {}
}
