import "../scss/app.scss"

let pokemonsArray = null
const ul = document.querySelector("ul")

window.addEventListener("DOMContentLoaded", () => {

  fetchPokemons()
})

const fetchPokemons = () => {

  fetch('https://pokeapi.co/api/v2/pokemon?limit=10').then(checkStatus).then(toJSON).then(data => {

    pokemonsArray = data.results
  }).then(appendPokemons)
}

const appendPokemons = () => {

  pokemonsArray.forEach(pokemon => {

    const list = document.createElement('li')

    list.innerHTML = pokemon.name

    ul.append(list)
  })
}

const checkStatus = (response) => {

  if (response.status >= 200 && response.status < 300) {

    return Promise.resolve(response)
  } else {

    return Promise.reject(new Error(response.statusText))
  }
}

const toJSON = (response) => {

  return response.json()
}
