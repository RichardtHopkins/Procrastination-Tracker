//require squelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {} //define the Project Class

Project.init(

    //attributes for project
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primayKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_created:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        date_due:{
            type: DataTypes.DATE
        },
    },
    {
        sequelize,
        timestamps:false,
        freezeTablename: true,
        underscored: true,
        modelName: 'Project',
    }
);

module.exports = Project;