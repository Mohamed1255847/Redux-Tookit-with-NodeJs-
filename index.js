
const express = require('express');
const app = express();
const port = 4000;
const userRouter = require('./router/users');



app.use('/users',userRouter);






app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 