const express = require("express");
const bodyParser = require("body-parser");

const protoRouter = require("./routes/proto");

const cors = require("./middleware/cors");

const envValuer = {
    PORT: 4000
}

const app = express();

app.use(bodyParser.json());
app.use("/feed", protoRouter);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.listen(4000, () => {
    console.log(`Server running on port ${envValuer.PORT}.`);
});

