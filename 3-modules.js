//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./4-names'); //Bij zelf gemaakte modules, altijd een . gebruiken, bij externe modules niet
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('tessa');
sayHi(names.john);
sayHi(names.peter);