const mongodb = require("mongoose");
const { DB_URL } = require("../constants");

const connDB = async () => {
  try {
    await mongodb
      .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("DB connected.."));
  } catch (error) {
    console.log("error connecting to DB");
  }
};

module.exports = connDB;
