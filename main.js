


const makeDino = function(species, period, diet, existence) {
  
  if (existence === undefined) {
    existence = false
  }
    return {
      carnivore: diet,
      species: species,
      period: period,
      extinct: existence,
    }
  }



const makeSingular = function(dino) {
  // Using Object.assign method to clone object so no mutation occurs.
  const dinoCopy = Object.assign({}, dino);

  const dinoSpecies = dinoCopy.species

  if (dinoSpecies.slice(dinoSpecies.length -2) === 'us') {
    dinoCopy.species = dinoSpecies.slice(0, dinoSpecies.length -2)
  }

  return dinoCopy  
}

const truncateSpecies = function(dino) {
  const dinoCopy = Object.assign({}, dino);
  const dinoSpecies = dinoCopy.species

  if (dinoSpecies.length > 10 ) {
    dinoCopy.species = dinoSpecies.slice(0, 7) + '...'
  } 
  return dinoCopy
}

const makeExtinct = function(dino) {
  const dinoCopy = Object.assign({}, dino);
  // const dinoExistence = dinoCopy.extinct

 

  return dinoCopy

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}