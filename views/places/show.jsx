const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div>
                    <h2>Rating</h2>
                    <p>Currently Unrated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

    < a href = {`/places/${data.id}/edit`} className = "btn btn-warning" >
        Edit
</a >
    <form method="POST" action="">
        <button type="submit" className="btn btn-danger">
            Delete
        </button>
    </form>

