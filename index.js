let jokes=require('./jokes');

let joke2=jokes.allJokes();
let app={}
// let arrLength=joke2.length;
let random=(min,max)=>{
    if(min<max){
    let ranNum=Math.floor(Math.random() * (max-min) + min);
    return ranNum;
    }
    else{
        return 0;
    }
}
// console.log(random(7,10)-1);
app.printMYjoke=()=>{
    
        let selected=joke2[random(0,6)];
        console.log(selected +"\n");
        // console.log(selected);

}
app.time={
    'time' : 3000
}
function loop(){
clearInterval(app.printMYjoke);
setInterval(app.printMYjoke,1000);

}

loop();
process.env.Node_ENV
// console.log(arrLength);