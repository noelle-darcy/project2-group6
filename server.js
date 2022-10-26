const express = require('express');



const app = express();
const PORT = process.env.PORT || 3001;

// const sequelize = 
// const SequelizeStore = require('connect-session-sequelize;)


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    sequelize.sync({ force: false });
});