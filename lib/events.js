// event pool registry
'use strict';

const EE = require('events');


// create the great unification event emitter
let ee = new EE();


module.exports = ee;