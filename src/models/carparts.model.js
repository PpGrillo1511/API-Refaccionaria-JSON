import { Schema, model } from "mongoose";

const carPartSchema = new Schema({
    partNumber: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    brand: String,
    price: Number,
    condition: String,
    stock: Number,
    status: Number,
    image: String // Agregamos un campo para la URL de la imagen del producto
}, {
    versionKey: false,
    timestamps: true
});

export default model('carPart', carPartSchema);
