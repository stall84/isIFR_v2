import express from 'express';
import index from './routes';
import path from 'path';

// Express Server
const app = express();


// View Engine (EJS) Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use('/', index);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.info(`Server running on port: ${PORT}`);
})