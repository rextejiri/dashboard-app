import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/patientRoutes.mjs'






const app = express();
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3001;




// mongo connection
const MONGODB_URI = process.env.MONGODB_URI
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})


mongoose.connection.on('error', err =>
  console.log(
    err.message,
    ' is Mongod not running?/Problem with Atlas Connection?'
  )
)

mongoose.connection.on('connected', () =>
  console.log('mongo connected:🧘🏾🧘🏾🧘🏾 ', MONGODB_URI)
)
mongoose.connection.on('disconnected', () => console.log('mongo disconnected '))


// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// express set up
app.use(express.json())
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));





// routes
routes(app);

app.get('/', (req, res) => {
  res.send(`first route`)
})


// listener

app.listen(PORT, () => {
  console.log(`server running here🧞‍♂️🧞‍♂️🧞‍♂️🧞‍♂️ ${PORT}`);
})
