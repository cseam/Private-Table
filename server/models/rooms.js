var db = require('../config/dbConfig.js');
var Sequelize = require('sequelize');
var Venue = require('./venue.js');

var Room = db.define('Room',
  {
    name: Sequelize.STRING,
    type: Sequelize.STRING,
    size: Sequelize.INTEGER,
    description: Sequelize.TEXT,
    availForBanquet: Sequelize.BOOLEAN,
    banquetCapacity: Sequelize.INTEGER,
    availForReception: Sequelize.BOOLEAN,
    receptionCapacity: Sequelize.INTEGER,
    minSpend: Sequelize.INTEGER,
    roomRentalFee: Sequelize.INTEGER,
    eventDuration: Sequelize.DECIMAL,
    durationOverageFee: Sequelize.INTEGER,
    parentVenue: Sequelize.INTEGER,
    cleaningFee: Sequelize.INTEGER,
    houseRules: Sequelize.STRING,
    cancelPolicy: Sequelize.STRING
  }
);

db.sync();

module.exports = Room;













module.exports = Room;