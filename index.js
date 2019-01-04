class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getName() {
    return this.name
  }

  getNameAndAge() {
    return `${this.name} is ${this.age} years old`
  }
}

const haidar = new Human("Haidar", 25)
const haekal = new Human("Haekal", 25)
const fadhil = new Human("Fadhil", 14)

console.log(haidar.getNameAndAge())
console.log(haekal.getNameAndAge())
console.log(fadhil.getNameAndAge())
