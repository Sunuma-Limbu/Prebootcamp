let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW

const petSounds = (name, country) => {
  for (let pet in animalNoises) {
    let petObj = animalNoises[pet]
    if (petObj[name]) {
      let countries = petObj[name]
      for (let c in countries) {
        if (c.toLowerCase() === country.toLowerCase()) {
          return `${name[0].toUpperCase() + name.slice(1)}s in ${c} say ${countries[c]}`
        }
      }
    }
  }
}

petSounds('dog', 'America')