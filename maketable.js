const express = require('express');
const fs = require('fs')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');

// database details
let sequelize = new Sequelize("chat", "root", "SJBhs@123", {
    dialect: "mysql"
  });

// create organization and channels
class Organizations extends Sequelize.Model {}
Organizations.init({ org_name: Sequelize.STRING }, { sequelize, modelName: 'organization' });
class Channels extends Sequelize.Model {}
Channels.init({ chan_name: Sequelize.STRING }, { sequelize, modelName: 'channel' });

// establish relation between organization and channel
Organizations.hasMany(Channels); // Will add userId to Task model
Channels.belongsTo(Organizations); // Will also add userId to Task model


// create users
class Users extends Sequelize.Model {}
Users.init({ user_name: Sequelize.STRING }, { sequelize, modelName: 'user' });

// establish relation between channels and users
Channels.hasMany(Users); // Will add userId to Task model
Users.belongsTo(Channels); // Will also add userId to Task model

// console.log(Channels.addOrganization)
    const c1 = Channels.create({
        chan_name: 'c1'
    })
    const c2 = Channels.create({
        chan_name: 'c2'
    })
    const org1 = Organizations.create({
        org_name: 'org1'
    })
    Promise.all([c1,c2, org1]).then((result) => {
       result[2].addChannels([result[0], result[1]])
    })

Promise.all([Organizations.sync(), Channels.sync()])
  .then(() => {
    
  })
  .catch(err => {
      console.log(err)
  })

// console.log(Channels.addOrganization)
const u1 = Users.create({
  user_name: 'u1'
})
const u2 = Users.create({
  user_name: 'u2'
})
// const c1 = Channels.create({
//     chan_name: 'c1'
// })
Promise.all([u1, u2, c1]).then((result) => {
 result[2].addUsers([result[0], result[1]])
})

Promise.all([Channels.sync(), Users.sync()])
.then(() => {

})
.catch(err => {
console.log(err)
})

  // create messages
  class Messages extends Sequelize.Model {}
  Messages.init({ message_content: Sequelize.STRING }, { sequelize, modelName: 'message' });
  
  Users.hasMany(Messages);
  Channels.hasMany(Messages);
  Messages.belongsTo(Users);
  Messages.belongsTo(Channels);
  

const m1 = Messages.create({
  message_content: 'm1'
});
const m2 = Messages.create({
  message_content: 'm2'
});
const u3 = Users.create({
    user_name: 'u3'
})
Promise.all([m1,m2, u3]).then((result) => {
 result[2].addMessages([result[0], result[1]])
})

Promise.all([Users.sync(), Messages.sync()])
.then(() => {

})
.catch(err => {
console.log(err)
})

Promise.all([Users.sync(), Messages.sync()])
.then(() => console.log('Done'))
