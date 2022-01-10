const express = require('express')
const router = express.Router()

router.post('/match-funding-results', function (req, res) {

  // Get the answer from session data
  const matchFunding = req.session.data['receive-match-funding']

  if (matchFunding === 'No') {
    res.redirect('/not-suitable')
  } else {
    res.redirect('/project-cost')
  }
})


router.get('funds', function (req, res) {
    res.render('funds', { name: 'Foo' })
})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/mp-endorsement-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var endorsementAnswer = req.session.data['endorsement']

  // Check whether the variable matches a condition
  if (endorsementAnswer == "true"){
    // Send user to next page
    res.redirect('/ALT-Section-questions/about-organisation-06')
  } if (endorsementAnswer == "false") {
    // Send user to about-project
    res.redirect('/ALT-Section-questions/about-project-01')
  }

})


module.exports = router
