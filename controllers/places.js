const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })  

router.get('/', (req, res)=> {
    const places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/thaifood.jpg'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/bakery.jpg'
          }]
    res.render('places/index', {places})
})

module.exports = router
