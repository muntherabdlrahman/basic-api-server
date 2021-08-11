'use strict';

const clothes=(sequalize, DataTypes)=>{
   const clothes= sequalize.define('clothes',{

        clothesName: {
            type: DataTypes.STRING,
            allowNull:false
        // defaultValue:true
    },
    contryclothes:{
        type:DataTypes.STRING,
    }


    
});
return clothes;
}

module.exports=clothes;
