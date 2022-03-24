import app from './server/express.js';

app.listen(app.get('PORT'), ()=> console.log(`Server on PORT : ${app.get('PORT')}`));

import './server/mongodb.js';