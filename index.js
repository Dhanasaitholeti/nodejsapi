const express  = require('express');
const router = require('./Routes/routes')
const port = process.env.PORT || 8080

const app = express();

app.use(router)


app.listen(port,() => {
    console.log(`The server is up and running on http://localhost:${port}`);
})