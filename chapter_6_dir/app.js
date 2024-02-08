let fs = require('fs');

//sync make directory
// fs.mkdirSync('stuff');

//async make directory
//fs.rmdirSync('stuff');

// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         if (err) {
//                 console.error(err);
//         }
//         fs.writeFile('./stuff/writeMe.txt', data, function(err) {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log('File written successfully.');
//             }
//         });
//     });
// });

fs.unlink('./stuff/writeMe.txt', function(err){
    if (err) {
        console.error(err);
    } else {
        fs.rmdirSync('stuff');
        console.log('File deleted successfully.');
    }
});