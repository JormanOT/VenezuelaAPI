import mongoose from 'mongoose';
import 'dotenv/config'

/* Enviroment  setup*/

const ENV = process.env.IS_DEV;
const LOCAL = process.env.LOCAL_DB;
const CLOUD = process.env.CLOUD_DB;

/* Connect database */

if (ENV === 'LOCAL') {
    mongoose.connect(LOCAL, {
        useUnifiedTopology: true, useNewUrlParser: true
    })
        .then(() => console.log(`Database Connected ! Local`))
        .catch(() => console.log('Database Disconnected Local'));
} else {
    mongoose.connect(CLOUD, {
        useUnifiedTopology: true, useNewUrlParser: true
    })
        .then(() => console.log(`Database Connected ! Cloud`))
        .catch((err) => console.log(err));
}
