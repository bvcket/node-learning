let counter = arr => {
    return `there are ${arr.length} elements in this array`;
}

let adder = (a,b) => {
    return `The sum of the 2 numbers is ${a+b}`;
};

let pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

// module.exports.counter = arr => {
//     return `there are ${arr.length} elements in this array`;
// }

// module.exports.adder = (a,b) => {
//     return `The sum of the 2 numbers is ${a+b}`;
// };

// module.exports.pi = 3.142;