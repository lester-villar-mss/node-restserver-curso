// ===================
// Puerto
// ===================

process.env.PORT = process.env.PORT || 5000;

// ===================
// Entorno
// ===================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================
// Base de datos
// ===================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://lester:12345@cluster0-vz4af.mongodb.net/cafe';
}

process.env.URLDB = urlDB;