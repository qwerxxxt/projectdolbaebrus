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
    user_id: {type: DataTypes.INTEGER}
})

const Project_info = sequelize.define('ProjectInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    date_project: {type: DataTypes.STRING},
    about_project: {type: DataTypes.STRING}
})

const Team = sequelize.define('team', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    img: {type: DataTypes.STRING, allowNull: false},
    team_name: {type: DataTypes.STRING},
    about_team: {type: DataTypes.STRING},
    user_id: {type: DataTypes.INTEGER}
})

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    text_comment: {type: DataTypes.STRING},
    user_id: {type: DataTypes.INTEGER},
    project_id: {type: DataTypes.INTEGER}
})

const Like = sequelize.define('like', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER},
    project_id: {type: DataTypes.INTEGER}
})

User.hasMany(Project)
Project.belongsTo(User)

User.hasOne(Team)
Team.belongsTo(User)

Project.hasMany(User)
User.belongsTo(Project)

Project.hasOne(Project_info)
Project_info.belongsTo(Project)

Project.hasMany(Comment)
Comment.belongsTo(Project)

Project.hasMany(Like)
Like.belongsTo(Project)

Team.hasOne(User)
User.belongsTo(Team)




module.exports = {
    User,
    Project_info,
    Project,
    Team,
    Comment,
    Like
}

