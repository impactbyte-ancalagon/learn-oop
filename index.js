const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR"
})

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

class Employee extends Human {
  constructor(name, age, profession, salary) {
    super(name, age)
    this.profession = profession
    this.salary = salary
  }

  getSalary() {
    return `${formatter.format(this.salary)}`
  }

  updateSalary(newSalary) {
    this.salary = newSalary
  }
}

const gatot = new Employee("Gatot Lagi", 21, "Developer", 9000000)
const ipul = new Employee("Ipul", 26, "Programmer", 12000000)

gatot.updateSalary(120000000)
console.log(gatot.getSalary())
