require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000/api/favorite"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
