let fs = require('fs');

//synchronous version
// let readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);

//asynchronous version
fs.readFile('readMe.txt', 'utf8', function(err, data) {
    if (err) {
        console.error(err);
        return;
    }

    fs.writeFile('writeMe.txt', data, function(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully.');
        }
    });
});

//delete
fs.unlink('writeMe.txt', function(err){
    if (err) {
        console.error(err);
    } else {
        console.log('File deleted successfully.');
    }
});