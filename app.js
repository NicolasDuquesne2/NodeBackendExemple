const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const stuffsRoutes = require('./routes/stuff')
const userRoutes = require('./routes/user')


//app.use(cors())
app.use(express.json())
/*app.use(express.urlencoded({ extended: true }))
const corsConfig = {
  origin: true,
  credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));*/

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


mongoose.connect('mongodb+srv://nduquesne:Kijfdjh584584@cluster0.5vlae.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use('/api/stuff', stuffsRoutes)
app.use('/api/auth', userRoutes)


module.exports = app