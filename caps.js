// PRIMARY app file
// everything runs out of here
// logs all events with timestamp and payload

'use strict';

// 1st party modules
const ee = require('./lib/events');

// 3rd party modules


// local modules
const vendor = require('./lab17/vendor.js');
const driver = require('./lab17/driver.js');



ee.on('pickup', logNewOrder);
ee.on('in-transit', logInTransit);
ee.on('delivered', logCompletedOrder);

// log all new orders
function logNewOrder(payload){
  let time = new Date(Date.now());
  console.log(`\n  Event: Pickup \r
  Time: ${time} \r
  Payload: {\r
    Store   : ${payload.store}\r
    OrderID : ${payload.orderID}\r
    Customer: ${payload.customer}\r
    Address : ${payload.address}\r
  }`);
}

// log of in-transit
function logInTransit(payload){
  let time = new Date(Date.now());
  console.log(`\n  Event: In Transit\r
  Time: ${time}\r
  Payload: {\r
    Store   : ${payload.store}\r
    OrderID : ${payload.orderID}\r
    Customer: ${payload.customer}\r
    Address : ${payload.address}\r
  }`);
}

// log delivered orders
function logCompletedOrder(payload){
  let time = new Date(Date.now());
  console.log(`\n  Event: Delivered \r
  Time: ${time}\r
  Payload: {\r
    Store   : ${payload.store}\r
    OrderID : ${payload.orderID}\r
    Customer: ${payload.customer}\r
    Address : ${payload.address}\r
  }`);
}


