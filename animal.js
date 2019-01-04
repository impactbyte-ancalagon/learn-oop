class Animal {
  constructor({ name = "Unknown", species = "Unknown", color = "Unknown" }) {
    this.name = name
    this.species = species
    this.color = color
  }
}

const anggoro = new Animal({
  species: "Cat",
  color: "White",
  name: "Anggoro"
})

const seping = new Animal({
  name: "Seping",
  species: "Cat",
  color: "Pink"
})

console.log(anggoro)
console.log(seping)
