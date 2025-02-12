import express from 'express';
import {
  httpSignIn,
  httpSignOut,
  httpSignUp,
} from './controllers/users.controller';
import { errorHandler } from './middlewares/errorHandler.middleware';
import { errorLog } from './middlewares/errorLogger';
import { notFoundHandler } from './middlewares/notFoundHandler';

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
  // call next function with error to handle 
  res.json('111')
})

app.get('/promiseError', async (req, res, next) => {
  fetch('https://jsonplaceholder.typicode.com/todosasdsa')
    .then(res => {
      if (!res.ok) {
        throw new Error('fetch not found')
      }
    })
    .catch(next)
})
app.get('/signup', httpSignUp);
app.get('/signin', httpSignIn);
app.get('/signout', httpSignOut);

app.all('*', (req, res, next) => {
  const err = new Error('not Found')
  err.status = 404
  next(err)
});

app.use(
  errorLog,
  errorHandler,
)
app.listen(3000, () => {
  console.log(`Listening on port 3000!`);
});
