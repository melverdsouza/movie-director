const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

// database details
let sequelize = new Sequelize("chat", "root", "SJBhs@123", {
    dialect: "mysql"
  });

// class Organizations extends Sequelize.Model {}
// Organizations.init({ o_id: {
//     field: 'org_id',
//     type:Sequelize.STRING,
//     primaryKey: true,
//     autoIncrement: true
// }}, { sequelize, modelName: 'organizations' });
// class Channels extends Sequelize.Model {}
// Channels.init({ c_id: {
//     field: 'chan_id',
//     type:Sequelize.STRING,
//     primaryKey: true,
//     autoIncrement: true
// },c_name: {
//         field: "chan_name",
//         type: Sequelize.STRING,
//         validate: {
//             notEmpty: {
//                 args: true,
//                 msg: 'name is required'
//             }
//         }
//     }}, { sequelize, modelName: 'channels' });

// // Organizations.hasMany(Channels); // Will add userId to Task model
// // Channels.belongsTo(Organizations); // Will also add userId to Task model

// Promise.all([Organizations.sync(), Channels.sync()])
// .then(() => console.log('Done'))

// table details
// let Organizations = sequelize.define('organizations', {
//     o_id: {
//         field: 'org_id',
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     o_name: {
//         field: "org_name",
//         type: Sequelize.STRING,
//         validate: {
//             notEmpty: {
//                 args: true,
//                 msg: 'name is required'
//             }
//         }
//     }
// }, {
//     timestamps: false
// })

// // let Channels = sequelize.define('channels', {
// //     c_id: {
// //         field: 'chan_id',
// //         type: Sequelize.INTEGER,
// //         primaryKey: true,
// //         autoIncrement: true
// //     },
// //     c_name: {
// //         field: "chan_name",
// //         type: Sequelize.STRING,
// //         validate: {
// //             notEmpty: {
// //                 args: true,
// //                 msg: 'name is required'
// //             }
// //         }
// //     },
// //     c_org_id: {
// //         type: Sequelize.INTEGER,
// //         field: "organization_id",
// //         foreignKey: 'org_id'
// //     }
// //     }, {
// //     timestamps: false
// // })

// // Channels.associate = (models) => {
// //     Channels.hasOne(models.Organizations, {
// //         foreignKey: 'org_id',
// //         as: 'organization_id'
// //     });
// //     return Channels;
// // }

// class Channels extends Sequelize.Model {}
// Channels.init({
//   chan_id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
// }, chan_name: {
//     type: Sequelize.STRING,
// }
// }, {
//   sequelize,
//   modelName: 'channels'
// });

// Channels.hasOne(Organizations);


// let Users = sequelize.define('users', {
//     u_id: {
//         field: 'user_id',
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     u_name: {
//         field: "user_name",
//         type: Sequelize.STRING,
//         validate: {
//             notEmpty: {
//                 args: true,
//                 msg: 'name is required'
//             }
//         }
//     },
//     u_chan_id: {
//         field: 'channel_id',
//         type: Sequelize.INTEGER,
//         foreignKey:'channels.chan_id',
//         allowNull: false
//     }

// }, {
//     timestamps: false
// }, )

// Users.associate = (models) => {
//     Users.hasMany(models.Channels, {
//         foreignKey: 'chan_id',
//         as: 'channel_id'
//     });
//     return Channels;
// }

// let Messages = sequelize.define('messages', {
//     m_id: {
//         field: 'mess_id',
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     m_content: {
//         field: "mess_content",
//         type: Sequelize.STRING,
//         validate: {
//             notEmpty: {
//                 args: true,
//                 msg: 'name is required'
//             }
//         }
//     },
//     m_user: {
//         field: "mess_user",
//         type: Sequelize.STRING,
//     },
//     m_channel: {
//         field: 'mess_channel',
//         type: Sequelize.INTEGER,
//         foreignKey: "chan_id"
//     }
// }, {
//     timestamps: true
// })

// Messages.associate = (models) => {
//     Messages.hasOne(models.Users, {
//         foreignKey: 'chan_id',
//         as: 'mess_channel'
//     });
//     return Channels;
// }

// // create tables
// Organizations.sync().then(function () {
//     // return Organizations.create({
//     // });
// });

// Channels.sync().then(function () {
//     // return Channels.create({
//     // });
// });

// Users.sync().then(function () {
//     // return Users.create({
//     // });
// });

// Messages.sync().then(function () {
//     // return Messages.create({
//     // });
// });

// // express setup
// const app = express();

// app.listen(4000);
// app.use(bodyParser.json());


// // create a new organization
// app.post('/api/organizations', function(request, response) {
//     Organizations.create({
//         o_name: request.body.org_name,
//     }).then(function (newOrganization) {
//         response.json(newOrganization);
//         console.log(newOrganization)
//     }).catch((error) => {
//         response.json(error)
//     });
// })

// // create a new channel
app.post('/api/channels', function(request, response) {
    Channels.create({
        c_name: request.body.chan_name,
        c_org: request.params.id
    }).then(function (newOrganization) {
        response.json(newOrganization);
        console.log(newOrganization)
    }).catch((error) => {
        response.json(error)
    });
})

// // create a new user
// app.post('/api/users/:id', function(request, response) {
//     Users.create({
//         u_name: request.body.user_name,
//         u_chan_id: request.params.id
//     }).then(function (newOrganization) {
//         response.json(newOrganization);
//         console.log(newOrganization)
//     }).catch((error) => {
//         response.json(error)
//     });
// })

// // create a new message
// app.post('/api/messages/:id', function(request, response) {
//     Messages.create({
//         m_user: request.body.mess_user,
//         m_chan: request.params.id,
//         m_content: request.body.mess_content,
//     }).then(function (newOrganization) {
//         response.json(newOrganization);
//         console.log(newOrganization)
//     }).catch((error) => {
//         response.json(error)
//     });
// })

// // get all organizations names
// app.get('/api/organizations', function (request, response) {
//     Organizations.findAll({attributes: [
//         'org_name'
//      ]}).then((organizations) => {
//         response.json(organizations);
//     })
// });

// // get all channels names
// app.get('/api/channels', function (request, response) {
//     Channels.findAll({attributes: [
//         'chan_name'
//      ]}).then((organizations) => {
//         response.json(organizations);
//     })
// });

// // get all channels in an organizations
// app.get('/api/channels/:id', function (request, response) {
//     let organization_id = request.params.id;

//     Channels.findByPk(organization_id,{attributes: [
//         'chan_name'
//      ]}).then((channelById) => {
//         response.json(channelById);
//     })
// });

// // get all messages in a channel
// app.get('/api/messages/:id', function (request, response) {
//     let channelId = request.params.id;

//     Messages.findAll({
//         where: {
//             mess_channel: [channelId]
//         },
//         order: [
//             ['updatedAt', 'DESC']
//         ],
//         attributes: [
//             'mess_content', 'mess_user', 'mess_channel'
//         ]
//     }).then((channelById) => {
//         response.json(channelById);
//     })
// });

// // get all channels of a user
// app.get('/api/users/:id', function (request, response) {
//     let userId = request.params.id;

//     Users.belongsTo(Channels,{foreignKey: 'channel_id'});
//     Channels.hasMany(Users,{foreignKey : 'chan_id'});
//     Channels.findAll({where: {
//         chan_id: [userId]
//     },attributes: ['chan_name']});
// });

// // messages in all channels by a user
// app.get('/api/messages/users/:id', function (request, response) {
//     let m_user = request.params.id;

//     Messages.findAll({where: {
//         mess_user: [m_user]
//         }
//     }).then((messageByUser) => {
//         response.json(messageByUser);
//     })
// });

// // messages in a channel by a user
// app.get('/api/channels/messages/:id', function (request, response) {
//     let m_chan = request.params.id;
//     let m_user = request.body.mess_user;

//     Messages.findAll({where: {
//         mess_channel: [m_chan],
//         mess_user: [m_user]
//         }
//     }).then((messageInChannelByUser) => {
//         response.json(messageInChannelByUser);
//     })
// });

// // count of messages per user
// app.get('/api/countmessages/user', function (request, response) {
//     // let m_chan = request.params.id;
//     // let m_user = request.body.mess_user;

//     Messages.findAll(
//         {
//         attributes: ['mess_user', [sequelize.fn('COUNT', sequelize.col('mess_user')), 'num_message']],
//         group: ['mess_user']
//     }
//     ).then((messageInChannelByUser) => {
//             response.json(messageInChannelByUser);
//         })
// });

// app.get('/api/countmessages/channels', function (request, response) {

//     Messages.findAll(
//         {
//         attributes: ['mess_user', [sequelize.fn('COUNT', sequelize.col('mess_user')), 'num_message']],
//         group: ['mess_user', 'mess_channel']
//     }
//     ).then((messageInChannelByUser) => {
//             response.json(messageInChannelByUser);
//         })
// });


// class Task extends Sequelize.Model {}
// Task.init({ title: Sequelize.STRING }, { sequelize, modelName: 'task' });
// class User extends Sequelize.Model {}
// User.init({ username: Sequelize.STRING }, { sequelize, modelName: 'user' });

// User.hasMany(Task); // Will add userId to Task model
// Task.belongsTo(User); // Will also add userId to Task model

class Organizations extends Sequelize.Model {}
Organizations.init({ title: Sequelize.STRING }, { sequelize, modelName: 'task' });
class User extends Sequelize.Model {}
User.init({ username: Sequelize.STRING }, { sequelize, modelName: 'user' });

User.hasMany(Task); // Will add userId to Task model
Task.belongsTo(User); // Will also add userId to Task model


Promise.all([Task.sync(), User.sync()])
  .then(() => console.log('Done'))