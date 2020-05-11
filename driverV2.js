'use strict';

// 1st party modules

// 3rd party modules
// const faker = require('faker');
// const inquirer = require('inquirer');

// local modules
// const ee = require('../lib/events.js');

// setup
const net = require('net');
const client = new net.Socket();
const PORT = process.env.PORT || 3000;
const HOST = process.env.host || 'localhost';

client.connect(PORT, HOST, () => {
  console.log('drivers online');
});

client.on('data', function(data){
  
  client.write('from the driver');
});


// (1) connect to the csps server