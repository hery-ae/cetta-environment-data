import { env } from 'process';
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'postgres',
    username: env['DB_USERNAME'],
    password: env['DB_PASSWORD'],
    database: env['DB_DATABASENAME']
});
class User extends Model {
}
User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.CHAR
    },
    password: {
        type: DataTypes.CHAR
    }
}, {
    sequelize,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: false
});
export default User;
