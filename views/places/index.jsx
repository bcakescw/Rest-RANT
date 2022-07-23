const React = require('react')
const Def = require('../default')

function Index (data) {
    const placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt = {place.name}/>
                <p className="text-cenmter">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>Restuarant's to Rant or Rave About
            <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}
    

module.exports = Index
