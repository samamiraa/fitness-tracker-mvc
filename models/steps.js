const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Steps extends Model {} 

Steps.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        day: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true,
            },
        },
        amount: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'steps',
    }
);

module.exports = Steps;