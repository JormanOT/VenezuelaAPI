import mongoose from 'mongoose'
const { model, Schema } = mongoose;

const venezuelaModel = new Schema({
    Nombre: { type: String },
    Bandera: { type: String },
    Escudo: { type: String },
    Ubicacion_Limites: { type: String },
    Politica_Gobierno: { type: String },
    Organizacion_Territorial: { type: String },
    Etimologia: { type: String },
    Historia: { type: String },
    Limites: {
        Norte: [],
        Sur: [],
        Este: [],
        Oeste: []
    },
    Estados : {},
    Estados_Total: { type: Number },
    Municipios_Total: { type: Number },
    Parroquias: { type: Number }
});

export default model('Venezuela', venezuelaModel);