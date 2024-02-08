let events = require('events');
let util = require('util');

// let myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');

let Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');
let people = [james, mary, ryu];

// people.forEach(function(person) {
//  person.on('speak', function(mssg) {
//     console.log(`${person.name} said: ${mssg}`);
//  });
// });

people.forEach(person => person.on('speak', mssg => console.log(`${person.name} said: ${mssg}`)));

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'Hadouken!');
