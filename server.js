var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});
