const config = require('./config.json')

const API_KEY = config.ownews.key

const blizzard = require('blizzard.js')
  .initialize({ apikey: API_KEY });

const characterDetails = { origin: 'us', realm: 'amanthul', name: 'charni' }

blizzard.wow.character(['profile'], characterDetails)
.then(response => {
  console.log('ok', response);
})
.catch(err => {
  console.log(err.message, err.response);
})
