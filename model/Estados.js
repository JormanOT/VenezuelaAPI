import mongoose from 'mongoose'
const { model, Schema } = mongoose;

const estadosModel = new Schema({
    Nombre: { type: String },
    Bandera: { type: String },
    Escudo: { type: String },
    Superficie: { type: String },
    Capital: { type: String },
    Fundada_Por: { type: String },
    Fundada: { type: String },
    Habitantes: { type: String },
    Sitios_Interes: [],
    Monumentos_Naturales: [],
    Parques: [],
    Fauna: [],
    Arbol: { type: String },
    Municipios: [],
    Total_Municipios: { type: Number },
    Historia: { type: String },
    Limites: {
        Norte: [],
        Sur: [],
        Este: [],
        Oeste: []
    },
    Informacion: {
        Artesania: { type: String },
        Folklore: { type: String },
        Gastronomia: { type: String },
        Relieve: { type: String },
        Economia: { type: String },
        Hidrografia: { type: String },
    },
    Recursos: {
        Forestales: [],
        Minerales: []
    },
    Aeropuertos: [],
    Puertos: []
}
);

export default model('Estados', estadosModel);