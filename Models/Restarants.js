const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResturantsSchema = new Schema(
    {_id :{
        type:Number,
        require:true
    },
    name :{
        type: String,
        require : true

    },
    city_name: {

        type: String,
        require: true
    },
    city :{
        type : Number,
        require : true
    },
    locality :{
        type : String,
        require: true
    },
    area :{
        type : Number,
        require : true
    },
    address :{
        type : String,
        require: true
    },
    thumb :{
        type : String,
        require: true
    },
    cost :{
        type : Number,
        require: true
    },
    contact_number :{
        type : Number,
        require: true
    },
    type:[
        {
            mealtype:Number,
            name: String
        }],
        Cushine :[{
            cushine:Number,
            name:String
        }]

        });
        module.exports = mongoose.model('Resturants',ResturantsSchema,'Resturants');