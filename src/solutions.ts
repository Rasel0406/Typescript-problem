// problem number one
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2 === 0);
}

const resultOne = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(resultOne);

// problem number two
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

const resultTwo = reverseString("typescript");
// console.log(resultTwo);

// problem number three
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): "String" | "Number" {
  return typeof value === "string" ? "String" : "Number";
}

const result1 = checkType("Hello");
const result2 = checkType(42);
// console.log(result1);
// console.log(result2);

// problem number four
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
     id: 1,
     name: "John Doe", 
     age: 21 
    };
const result = getProperty(user, "name");
// console.log(result);

// problem number five
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const resultFive = toggleReadStatus(myBook);
// console.log(resultFive);


// problem number six
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());


//problem number seven
function getIntersection(a: number[], b: number[]): number[] {
  const setB = new Set(b);
  return a.filter((n) => setB.has(n));
}

const resultSeven = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(resultSeven);


