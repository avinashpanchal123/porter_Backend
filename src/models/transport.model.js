const {Schema,model} = require("mongoose");

const transportSchema = new Schema({

 
    city: {
        type: String,
        required: true
    },
    pickup: {
        type: String,
        required: true
    },
    dropOff: {
        type: String,
        required: true
    },
 
    mobile: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    requirement : {
        type : String,
        required: true
    }


}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model ("transport", transportSchema)
