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
    Parroquias: [],
    Total_Municipios: { type: Number },
    Total_Parroquias: { type: Number },
    Historia: { type: String },
    Limites: {
        Norte: [],
        Sur: [],
        Este: [],
        Oeste: []
    },
    Informacion: {
        Artesania: [],
        Folklore: [],
        Gastronomia: [],
        Relieve: { type: String },
        Economia: [],
        Hidrografia: [],
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