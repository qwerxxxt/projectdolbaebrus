const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})


const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    img: {type: DataTypes.STRING, allowNull: false},
    project_name: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING},
    rating: {type: DataTypes.INTEGER},
    user_id: {type: DataTypes.INTEGER}
})

const Project_info = sequelize.define('define', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    date_project: {type: DataTypes.INTEGER},
    about_project: {type: DataTypes.STRING}
})

const Person = sequelize.define('team', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    img: {type: DataTypes.STRING, allowNull: false},
    team_name: {type: DataTypes.STRING},
    about_name: {type: DataTypes.STRING}
})

User.hasMany(Project)
Project.belongsTo(User)

User.hasOne(Person)
Person.belongsTo(User)

Project.hasMany(User)
User.belongsTo(Project)

Project.hasOne(Project_info)
Project_info.belongsTo(Project)

Person.hasOne(User)
User.belongsTo(Person)


module.exports = {
    User,
    Project_info,
    Project,
    Person
}

