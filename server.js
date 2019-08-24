const express = require('express')
const app = express()
const port = 3000

//accept json
app.use(express.json());

//Routes
app.use('/', require("./src/routes"))

app.listen(port, () => console.log('access: http://localhost:'+port))