const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;



// Sets static folder to public.
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Hello!  Welcome to the Muttel</h1>');
});


app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
    // sequelize.sync({ force: false });
});