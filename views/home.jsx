const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/fruitssmall.jpg" alt = "Fruit Salad and Breakfast"/>
                <div>
                    Photo by <a href="https://unsplash.com/photos/nTZOILVZuOg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Brooke Lark</a>on<a href="https://unsplash.com/s/photos/food">Unsplash</a>
                </div>
              </div>
              <a href = "/places">
                <button className="btn-primary">Places Pages</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
