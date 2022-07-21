const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>\ <div>
                <img src="/images/puppy.jpg" alt = "Little Puppy"/>
                <div>
                    Photo by <a href="https://unhttps://unsplash.com/photos/fk4tiMlDFF0?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLinksplash.com/photos/nTZOILVZuOg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Hannah Grace</a>on<a href="https://unsplash.https://unsplash.com/photos/fk4tiMlDFF0com/s/photos/food">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404
