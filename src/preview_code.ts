/**
 * Once upon a time
 */

interface IVampire {
  location: string
  birthDate: number
  deathDate: number
  weaknesses: string[]
}

class Vampire {
  constructor(public props: IVampire) {}

  get age() {
    return this.calcAge()
  }

  calcAge() {
    return this.props.deathDate - this.props.birthDate
  }
}

// ...there was a guy named Vlad

const Vlad = new Vampire({
  location: 'Transylvania',
  birthDate: 1428,
  deathDate: 1476,
  weaknesses: ['sunlight', 'garlic']
})
