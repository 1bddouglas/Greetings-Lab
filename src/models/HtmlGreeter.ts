import Greeter from "./Greeter";

export default class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, tagName: string = "h1") {
    super(greeting);
    this.tagName = tagName;
  }
  greet(HtmlName: string): string {
    return `<${this.tagName}>${super.greet(HtmlName)}</${this.tagName}>`;
  }
}
