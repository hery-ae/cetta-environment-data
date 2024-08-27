import { env } from 'process'
import { Sequelize, DataTypes, Model } from 'sequelize'
import User from './user.mjs'

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: env['DB_USERNAME'],
    password: env['DB_PASSWORD'],
    database: env['DB_DATABASENAME']
})

class EnvironmentData extends Model {
    declare id: number
    declare place: string
    declare unit: string
    declare value: string
}

EnvironmentData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        place: {
            type: DataTypes.CHAR
        },
        unit: {
            type: DataTypes.CHAR
        },
        value: {
            type: DataTypes.CHAR
        }
    },
    {
        sequelize,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)

EnvironmentData.belongsTo(
    User,
    {
        foreignKey: 'user_id'
    }
)

export default EnvironmentData
