const express = require("express");
const app = express();
app.get("/", (req, resp) => {
    resp.send("app is okay")
});

app.listen(5000);