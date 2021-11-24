console.log("server runs");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening at port ${port}`));
app.use(express.static("public"));
app.use(express.json());

app.post("/api", (req, res) => {
    console.log("I got a request");
    console.log(req.body);
});
