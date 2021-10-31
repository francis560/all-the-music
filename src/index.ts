import express, { Application } from 'express';
import Handlebars from 'handlebars';
import expressHandlebars from 'express-handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import router from './routes/ruta.routes';
import morgan from 'morgan';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
const app: Application = express();



app.use(express());
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./music'))




app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHandlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layout'),
    partialsDir: path.join(__dirname, 'views'),
    extname: '.hbs',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || 3000);





import './database';

app.use(router);



export default app