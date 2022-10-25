import Greeter from "../src/models/Greeter";
import HtmlGreeter from "../src/models/HtmlGreeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe(`Greeter class`, () => {
  test(`constructor sets greeting property`, () => {
    // arrange
    const hello: Greeter = new Greeter("howdy");
    // act (n/a)
    // assert
    expect(hello.greeting).toBe("howdy");
  });
  test(`greet method called with "mom" and object constructed with param "hi" returns "hi, mom!"`, () => {
    // arrange - set up data
    const newGreeting: Greeter = new Greeter("hi");
    // act - call method
    const returnString: string = newGreeting.greet("mom");
    // assert
    expect(returnString).toBe("hi, mom!");
  });
});

describe(`JavaScript Greeter`, () => {
  test(`greet method: greeting "hola" and name "Dominic" returns "console.log('hola, Dominic!')`, () => {
    // arrange
    const objectExample: JavaScriptGreeter = new JavaScriptGreeter("hola");
    // act
    const result: string = objectExample.greet("Dominic");
    // assert
    expect(result).toBe("console.log('hola, Dominic!')");
  });
  test(`greet method: greeting "sup" and name "James" returns "console.log('sup, James!')`, () => {
    // arrange
    const objectExample: JavaScriptGreeter = new JavaScriptGreeter("sup");
    // act
    const result: string = objectExample.greet("James");
    // assert
    expect(result).toBe("console.log('sup, James!')");
  });
});

describe(`Loud Greeter`, () => {
  test(`greet method: greeting "Howdy" and "Josh" while calling addVolume once returns "Howdy, Josh!!!"`, () => {
    // arrange
    const salutations: LoudGreeter = new LoudGreeter("Howdy");
    // act
    salutations.addVolume();
    const result: string = salutations.greet("Josh");
    // assert
    expect(result).toBe("Howdy, Josh!!!");
  });
  test(`greet method: greeting "Howdy" and "Josh" without calling addVolume returns "Howdy, Josh!!"`, () => {
    // arrange
    const salutations: LoudGreeter = new LoudGreeter("Howdy");
    // act
    const result: string = salutations.greet("Josh");
    // assert
    expect(result).toBe("Howdy, Josh!!");
  });
  test(`greet method: greeting "Howdy" and "Josh" while calling addVolume thrice returns "Howdy, Josh!!!!!"`, () => {
    // arrange
    const salutations: LoudGreeter = new LoudGreeter("Howdy");
    // act
    salutations.addVolume();
    salutations.addVolume();
    salutations.addVolume();
    const result: string = salutations.greet("Josh");
    // assert
    expect(result).toBe("Howdy, Josh!!!!!");
  });
});

describe(`Html Greeter`, () => {
  test(`greet method: greeting "Ciao" and "Herty" with a default tagName returns "<h1>Ciao, Herty!</h1>`, () => {
    const ciao: HtmlGreeter = new HtmlGreeter("Ciao");
    const result: string = ciao.greet("Herty");
    expect(result).toBe("<h1>Ciao, Herty!</h1>");
  });
  test(`greet method: greeting "Ciao" and "Herty" with a tagName of p returns "<p>Ciao, Herty!</p>`, () => {
    const ciao: HtmlGreeter = new HtmlGreeter("Ciao", "p");
    const result: string = ciao.greet("Herty");
    expect(result).toBe("<p>Ciao, Herty!</p>");
  });
});
