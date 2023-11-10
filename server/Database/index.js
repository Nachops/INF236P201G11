const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://Bastian_Ortega:Basty123@bd-proyecto.cbtkw3b.mongodb.net/?retryWrites=true&w=majority"

const db = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}

module.exports = db;