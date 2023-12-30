const sequelize = require("./config.js");
const relations = require("./models/relations.js");
const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
Connection();
