'use strict';

const clothes=(sequalize, DataTypes)=>{
    sequalize.define('clothes',{

        clothesName: {
            type: DataTypes.STRING,
        allowNull:false
    },
    contryclothes:{
        type:DataTypes.STRING,
    }
});
}

module.exports=clothes;
