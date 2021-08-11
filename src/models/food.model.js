'use strict';

const food=(sequalize, DataTypes)=>{
   const food= sequalize.define('food',{

        foodName: {
            type: DataTypes.STRING,
            allowNull:false
        // defaultValue:true
    },
    contryFood:{
        type:DataTypes.STRING,
    }


    
});
return food;
}

module.exports=food;
