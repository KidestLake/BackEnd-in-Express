const fs= require('fs');
// fs.writeFile('message.txt','hello there kodoo', err =>{
//     if(err) throw err;
//     console.log(`fle has been written`);
    
// });
console.log('heli');
fs.readFile('./message.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
    

} )