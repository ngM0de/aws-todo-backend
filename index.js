const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('Hi there')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server runs on port ${process.env.PORT || 3000}`)
})