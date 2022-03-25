import venezuelaModel from '../model/Venezuela.js';
import estadosModel from '../model/Estados.js';

export default {
    getVenezuela: async (req, res) => {
        try {
            const Data = await venezuelaModel.findOne({ Nombre: 'Venezuela' });
            if (Data) {
                res.status(200).json(Data);
            } else {
                res.status(404).json({
                    message: "Los datos no existen"
                })
            }
        } catch (error) {
            res.status(503).json({
                message: "Hubo un error al obtener la informacion",
                Error: error
            })
        }
    },
    setVenezuela: async (req, res) => {
        const Data = req.body;
        try {
            const Venezuela = new venezuelaModel({
                Nombre: Data.Nombre,
                Bandera: Data.Bandera,
                Escudo: Data.Escudo,
                Ubicacion_Limites: Data.Ubicacion_Limites,
                Politica_Gobierno: Data.Politica_Gobierno,
                Organizacion_Territorial: Data.Organizacion_Territorial,
                Etimologia: Data.Etimologia,
                Historia: Data.Historia,
                Limites: {
                    Norte: Data.Limites.Norte,
                    Sur: Data.Limites.Sur,
                    Este: Data.Limites.Este,
                    Oeste: Data.Limites.Oeste
                },
                Estados: Data.Estados,
                Estados_Total: Data.Estados_Total,
                Municipios_Total: Data.Municipios_Total,
                Parroquias: Data.Parroquias

            })
            await Venezuela.save();
            res.status(201).json({
                message: "Informacion guardada con exito!!",
                Data
            })
        } catch (error) {
            res.status(503).json({
                message: "Hubo error al guardar la informacion",
                Error: error
            })
        }
    },
    getEstados: async (req, res) => {
        const Estado = req.params.Estado;
        try {
            const Data = await estadosModel.findOne({ Nombre: `${Estado}` });
            if (Data) {
                res.status(200).json(Data);
            } else {
                res.status(404).json({
                    message: "Los datos no existen"
                })
            }
        } catch (error) {
            res.status(503).json({
                message: "Hubo un error al obtener la informacion",
                Error: error
            })
        }
    },
    setEstados: async (req, res) => {
        const Data = req.body;
        const nameLower = Data ? Data.Nombre.toLowerCase() : "";
        try {
            const Estado = new estadosModel({
                Nombre: nameLower,
                Bandera: Data.Bandera,
                Escudo: Data.Escudo,
                Superficie: Data.Superficie,
                Capital: Data.Capital,
                Fundada_Por: Data.Fundada_Por,
                Fundada: Data.Fundada,
                Habitantes: Data.Habitantes,
                Limites: {
                    Norte: Data.Limites.Norte,
                    Sur: Data.Limites.Sur,
                    Este: Data.Limites.Este,
                    Oeste: Data.Limites.Oeste
                },
                Sitios_Interes: Data.Sitios_Interes,
                Monumentos_Naturales: Data.Monumentos_Naturales,
                Parques: Data.Parques,
                Fauna: Data.Fauna,
                Arbol: Data.Arbol,
                Municipios: Data.Municipios,
                Municipios_Total: Data.Municipios_Total,
                Historia: Data.Historia,
                Informacion: {
                    "Artesania": Data.Informacion.Artesania,
                    "Folklore": Data.Informacion.Folklore,
                    "Gastronomia": Data.Informacion.Gastronomia,
                    "Relieve": Data.Informacion.Relieve,
                    "Economia": Data.Informacion.Economia,
                    "Hidrografia": Data.Informacion.Hidrografia,
                },
                Recursos: {
                    Forestales: Data.Recursos.Forestales,
                    Minerales: Data.Recursos.Minerales
                },
                Aeropuertos: Data.Aeropuertos,
                Puertos: Data.Puertos
            })
            await Estado.save();
            res.status(201).json({
                message: "Informacion guardada con exito!!",
                Data
            })
        } catch (error) {
            res.status(503).json({
                message: "Hubo error al guardar la informacion",
                Error: error
            })
        }
    }
}