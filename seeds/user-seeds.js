// create user-seeds and export

const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'bo123',
    email: 'email1@email.com',
    password: 'password1'
  },
  {
    username: '321ob',
    email: 'email2@email.com',
    password: 'password2'
  },
  {
    username: 'gatsby12',
    email: 'email3@email.com',
    password: 'password3'
  },
  {
    username: 'thegreat1',
    email: 'email4@email.com',
    password: 'password4'
  },
  {
    username: 'dirkdirk',
    email: 'email5@email.com',
    password: 'password5'
  },
  {
    username: 'blackmambas',
    email: 'email6@email.com',
    password: 'password6'
  },
  {
    username: 'mpergens6',
    email: 'email7@email.com',
    password: 'password7'
  },
  {
    username: 'tpenniell7',
    email: 'email8@email.com',
    password: 'password8'
  },
  {
    username: 'dobbins12',
    email: 'email9@email.com',
    password: 'password9'
  },
  {
    username: 'coolmanjoe',
    email: 'email10@email.com',
    password: 'password10'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;