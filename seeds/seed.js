const sequelize = require('../config/connection');
const { User, Project, Comment, Collaborator } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const commentData = require('./commentData.json');
const collaboratorData = require('./collarboratorData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Comment.bulkCreate(commentData);

  await Collaborator.bulkCreate(collaboratorData);

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
for (const project of projectData){
  await Project.create({
    ...project,
    user_id: user[Math,floor(Math.random() * users.length)].id,
  });
}
  process.exit(0);
};

seedDatabase();
