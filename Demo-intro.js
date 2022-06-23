let harryAttack =25;
let lordVAttack =35;
if(harryAttack > lordVAttack){
    console.log("Harry has a better attack than Lord V")
}else if(lordVAttack > harryAttack){
    console.log("Lord V has a better attack than Harry")
}else {
    console.log("Harry and Lord V have the same attack")
}

let harryHealth =100;
let harryDefense =0;
if (harryHealth <= lordVAttack){
    console.log ("Harry has been slain")
}else{
    harryHealth-=lordVAttack;
    console.log (`Harry's health is down ${harryHealth}`)
}

//Harry picks up a shield

harryDefense +=25;

if (harryHealth<=lordVAttack-harryDefense){
    console.log("Harry has been slain")
}else{
harryHealth-= (lordVAttack-harryDefense)
console.log (`Harry's health is down ${harryHealth}`)
}


let healthkit =50
if ((harryHealth+healthkit)>=100){
    harryHealth=100;
}else {
    harryHealth+=healthkit;
}
console.log (`harry got some help. Health is now ${harryHealth}`)

let coinTossHeads= false;
if (coinTossHeads!==false){
    console.log ("the fight continues");
}else{
    console.log ("harry is allowed to run away");
}

for (let i=0; i<10; i++){
    if(harryHealth<=0){
        console.log ("Harry has been slain")
    } else {
        harryHealth-=(lordVAttack-harryDefense)
    console.log (`harry's health is ${harryHealth}`);
    }
}

// for (let i=0; i<5; i++){
//     if(harryHealth<=0){
//         console.log ("Harry has been slain")
//     } else {
//         harryHealth-=(lordVAttack-harryDefense)
//     console.log (`harry's health is ${harryHealth}`);
//     }
// }

while(harryHealth >= 0){
    harryHealth -= (lordVAttack - harryDefense)
    console.log(`Harry's health is ${harryHealth}`)
    if (harryHealth <= 0){
        console.log("harry has been slain")
    }
}
