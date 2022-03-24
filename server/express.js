import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression'
import 'dotenv/config'
// import morgan from 'morgan';
import error_types from '../config/Errors.js'

/* xpress app intance */

const app = express();

/* Server config */

app.set('PORT', process.env.PORT || 3000)

/* Middlerwares */

app.use(helmet());
app.use(cors());
app.use(compression());
// app.use(morgan('dev')); desactivada por entrar en conflicto en heroku ( dependencia de desarrollo, heroku no la instaló)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Server Routes */

import Routes from '../routes/routes.js'

app.use(Routes);

/* Manejos de errores */

app.use((error, req, res, next) => {
    if (error instanceof error_types.InfoError)
        res.status(200).json({ error: error.message });
    else if (error instanceof error_types.Error404)
        res.status(404).json({ error: error.message });
    else if (error instanceof error_types.Error403)
        res.status(403).json({ error: error.message });
    else if (error instanceof error_types.Error401)
        res.status(401).json({ error: error.message });
    else if (error.name == "ValidationError") //de mongoose
        res.status(200).json({ error: error.message });
    else if (error.message) {
        res.status(500).json({ error: error.message });
    }
    else
        next();
});
app.use((req, res, next) => {
    res.status(404).json({ error: "endpoint no encontrado" });
});

export default app;