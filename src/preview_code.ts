/**
 * Once upon a time
 */

class Vampire {
  location: string
  birthDate: number
  deathDate: number
  weaknesses: string[]

  constructor(props) {
    this.location = props.location
    this.birthDate = props.birthDate
    this.deathDate = props.deathDate
    this.weaknesses = props.weaknesses
  }

  get age() {
    return this.calcAge()
  }

  calcAge() {
    return this.deathDate - this.birthDate
  }
}

// ...there was a guy named Vlad

const Vlad = new Vampire({
  location: 'Transylvania',
  birthDate: 1428,
  deathDate: 1476,
  weaknesses: ['sunlight', 'garlic']
})
