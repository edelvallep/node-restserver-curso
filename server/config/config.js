//=======================================
//Puerto
//=======================================
process.env.PORT = process.env.PORT || 3000;
//=======================================
//Entorno
//=======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//=======================================
//Base de datos
//=======================================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;
//=======================================
//Vencimiento de token
//=======================================
process.env.CADUCIDAD_TOKEN = expiresIn = 60 * 60 * 24 * 30;

//=======================================
//SEED de autenticacion
//=======================================
process.env.SEED = process.env.SEED | 'este-es-el-seed-desarrollo';

//=======================================
//Google client id
//=======================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '859207137939-jv9iafs4i254iqtgs18ok8vdsj55vqem.apps.googleusercontent.com';