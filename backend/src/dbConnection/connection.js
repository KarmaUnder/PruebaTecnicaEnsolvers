const mongoose = require('mongoose')
const password = 'KarmaUnder1'

const uri= `mongodb+srv://KarmaUnder:${password}@cluster0.wrgnv.mongodb.net/?retryWrites=true&w=majority`

module.exports = ()=> mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})