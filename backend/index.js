const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const PORT = 4001

app.get("/", (req, res) => {
    res.send('teszt')
})

app.listen(PORT, () => {
    console.log('express started')
})