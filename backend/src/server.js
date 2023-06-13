const app = require("./app");

require("dotenv").config();

const Port = process.env.Port || 3333;

app.listen(Port, () => console.log(`Server running or port ${Port}`));
