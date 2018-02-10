// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
 uri: 'mongodb://joshmendeja:joshmendeja@ds131258.mlab.com:31258/meandbappj', // Databse URI and database name
 secret: crypto, // Cryto-created secret
 db: 'meandb' // Database name
}