import express from 'express'
import cors from 'cors'
import session from 'express-session'
import { authRouter } from './routes/auth.js'
import { meRouter } from './routes/me.js'
import { confessionRouter } from './routes/confessions.js';
const PORT = 3000

const app = express();
app.use(express.static('public'));

app.use(cors());
app.use(express.json());
app.use(session({
  name: 'confessions.sid',
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,  
    sameSite: 'lax'
  }
}))
app.use('/api/auth/me', meRouter)

app.use('/api/auth', authRouter)

app.use('/api/confessions', confessionRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})