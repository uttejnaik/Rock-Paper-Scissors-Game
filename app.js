let userScore=0;
let compScore=0;
let msgprint=document.querySelector("#msg");
let ok=document.querySelectorAll(".choice");
let userScoreBoard=document.querySelector("#user-score");
let compScoreBoard=document.querySelector("#computer-score")
ok.forEach((options)=>{
    options.addEventListener("click",()=>{
        let userOpt=options.getAttribute("id")
        // console.log("button click",userOpt);
        compare(userOpt);
       
      
    })
})
// game draw
function gameDraw(){
    console.log("draw");
    msgprint.innerText="game will draw paly again";
    msgprint.style.backgroundColor="orange";
}
// USER CHOICE FUNCTION
function compare(userCall){
console.log(`button was clicked = ${userCall}`);
let bb=compOpt(); 
console.log("compurt choice =" , bb);
if(userCall === bb){
    // console.log("game draw");=
    gameDraw()
}else{
    let user=true;
    if(userCall === "rock"){
        // paper or scissors
       user= bb==="paper" ? false : true;
    }else if(userCall === "paper"){
        // rock or scissors
        user= bb === "scissors" ? false : true;
    }else{
        // rock or paper
        user= bb=== "rock" ? false : true;
    }
    showWinning(user,userCall,bb);

//     if(userCall === "rock"){
    // paper or scissors
//         if(bb==="paper"){
//             msgprint.style.backgroundColor="green";
//             console.log("user loss this game");
//         }else{
//             console.log("user win");
//             msgprint.style.backgroundColor="red";
//         }

//     }else  if(userCall === "paper"){
    // paper or scissors
//         if(bb==="scissors"){
//             console.log("user loass");
//             msgprint.style.backgroundColor="red";
//         }else{
//             console.log("user win thsi agme");
//             msgprint.style.backgroundColor="green";
//         }

//     }else {
    // paper or scissors
//         if(bb==="rock"){
//             console.log("user loss");
//             msgprint.style.backgroundColor="red";
//         }else{
//             console.log("user win thsi game");
//             msgprint.style.backgroundColor="green";
//         }

//     }
}

};

// winnner
let showWinning=(nn,hh,kk)=>{
    if(nn===true){
        userScore++;
        userScoreBoard.innerText=userScore;
        msgprint.innerText=`user win this game user beats ${hh} to ${kk}`;
        msgprint.style.backgroundColor="green";
        console.log("user win");
        
        
        
        
    }else {
        compScore++;
        compScoreBoard.innerText=compScore;
        console.log("use loss");
        msgprint.innerText=`user loss this game computer beats ${kk} to ${hh} `;
        msgprint.style.backgroundColor="red";
    }
}
// COMPUTER RANDAOM GENERATE CHOICE 
function compOpt(){
    let arr=["rock" ,"paper","scissors"]
    let randomIdx=Math.floor(Math.random()*3);
    return arr[ randomIdx];
    // console.log(`compurt choice     ${arr[vv]}:`,arr[vv]);
}




