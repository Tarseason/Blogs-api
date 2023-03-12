const express = require('express');
const userRoute = require('./routes/user.route');
const loginRouter = require('./routes/login.route');
const categoryRouter = require('./routes/categories.route');
const postRouter = require('./routes/post.route');
// ...

const app = express();
app.use(express.json());

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

module.exports = app;
