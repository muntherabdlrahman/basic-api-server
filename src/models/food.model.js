'use strict';

const food=(sequalize, DataTypes)=>{
    sequalize.define('food',{

        foodName: {
            type: DataTypes.STRING,
        allowNull:false
    },
    contryFood:{
        type:DataTypes.STRING,
    }
});
}

module.exports=food;
