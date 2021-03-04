let fs=require('fs');
let jokes={};

jokes.allJokes = function (){
    let fileData=fs.readFileSync(__dirname + '/jokes.txt', 'utf-8');
    let arrData=fileData.split('\n');
    // arrData.forEach(item=>{
    //     console.log(item);
    // })
    return arrData;
}

// jokes.allJokes();

module.exports=jokes;