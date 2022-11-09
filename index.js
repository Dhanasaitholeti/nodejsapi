const express  = require('express');
const cors = require('cors');
const router = require('./Routes/routes')
const port = process.env.PORT || 8080

const app = express();
app.use(cors())
app.use(router)


app.listen(port,() => {
    console.log(`The server is up and running on http://localhost:${port}`);
})
