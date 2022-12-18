import express from 'express';
const app = express();

import index from "./routes/index";
import fizzbuzz from "./routes/fizzbuzz";

app.use('/', index);
app.use('/fizzbuzz', fizzbuzz);

const port = process.env.PORT || 9876;

app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`);
});