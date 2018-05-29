const getUrl = 'https://api.punkapi.com/v2/beers'

getData(getUrl)

function getData (url) {
    return fetch(url)
        .then(response => response.json())
        .then(beers => {
            createBeerCard(beers)
            console.log(beers)
        })
}

function createBeerCard(beers) {
    const beerContainer = document.querySelector('main')
    return beers.forEach(beer => {
        beerContainer.innerHTML += (`
                <div class="front">
                    <h2>${beer.name}</h2>
                    <img src=${beer.image_url}></img>
                    <p>${beer.tagline}</p>
                </div>
        `)
    })
}