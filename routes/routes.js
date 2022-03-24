import express from 'express';
const Router = express.Router();
import security from '../helpers/security.js'

import CTRL  from '../controller/apiController.js'

/* Metodos GET */

Router.get('/', CTRL.getVenezuela);
Router.get('/Venezuela/:Estado', CTRL.getEstados);

/* Metodos POST */
Router.post('/Venezuela', security , CTRL.setVenezuela);
Router.post('/Estados', security , CTRL.setEstados);

export default Router;