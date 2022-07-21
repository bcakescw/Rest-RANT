const React = require('react')
const Def = require('../default')

function Index (data) {
    const placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt = {place.name}/>
            </div>
        )
    })
    return (
        <Def>
            <main>PLACES INDEX PAGE
            {placesFormatted}
            </main>
        </Def>
    )
}
    

module.exports = Index
