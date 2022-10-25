export default class Greeter {
  greeting: string;
  constructor(inputGreeting: string) {
    this.greeting = inputGreeting;
  }
  greet(name: string) {
    return `${this.greeting}, ${name}!`;
  }
}
