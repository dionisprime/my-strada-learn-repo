function greet(name: string) {
  console.log('Hello, ' + name);
}

function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function findMax(arr: number[]): number {
  return Math.max(...arr);
}

function joinString(strings: string[], separator: string): string {
  return strings.join(separator);
}

greet('Jimmy');
console.log(add(3, 3));
console.log(multiply(5, 3));
console.log('isEven? ' + isEven(6));
console.log(findMax([2, 4, 9, 54, 4, 6, 8, 42, 3, 33]));
console.log(joinString(['Hello', 'My', 'Great', 'World'], ' ^_^ '));
