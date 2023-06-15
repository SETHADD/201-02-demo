'use strict'
function total(){

let welcome = prompt("Welcome! may I know your name? ");
//console.log(welcome);
alert(welcome+ " welcome to the best user experience")

let score = 0;

//let's play a quess game
alert("lets play a game. Please type yes/y or no/n as an answer")


function q1() {
    let i = 0;
    while (i < 1) {
        let question1 = prompt("Is Accra the Capital of Ghana? ").toLowerCase();
       // console.log(question1);

        if (question1 !== "yes" && question1 !== "y" && question1 !== "no" && question1 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question1 === "no" || question1 === "n") {
            alert("Sorry! Accra is the capital of Ghana");
            i++;
        } else if (question1 === "yes" || question1 === "y") {
            alert("You are right!");
            i++;
            score++;
        }
    }
};
q1();
 
function q2() {
    let i = 0;
    while (i < 1) {
        let question2 = prompt("Is london 2hrs away from Peterborough by car? ").toLowerCase();
       // console.log(question2);

        if (question2 !== "yes" && question2 !== "y" && question2 !== "no" && question2 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question2 === "no" || question2 === "n") {
            alert("Sorry! but that is true");
            i++;
        } else if (question2 === "yes" || question2 === "y") {
            alert("you are right! ");
            i++;
            score++;
        }
    }
};
q2();

function q3() {
    let i = 0;
    while (i < 1) {
        let question3 = prompt("England Celebrate independence day? ").toLowerCase();
       // console.log(question3);

        if (question3 !== "yes" && question3 !== "y" && question3 !== "no" && question3 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question3 === "no" || question3 === "n") {
            alert(" You are right! England was never colonized");
            i++;
            score++;
        } else if (question3 === "yes" || question3 === "y") {
            alert("Sorry! That is not right");
            i++;
        }
    }
};
q3();

function q4() {
    let i = 0;
    while (i < 1) {
        let question4 = prompt("Mercedes Benz originates from Germany? ").toLowerCase();
        //console.log(question4);

        if (question4 !== "yes" && question4 !== "y" && question4 !== "no" && question4 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question4 === "no" || question4 === "n") {
            alert("Sorry! That's not right");
            i++;
        } else if (question4 === "yes" || question4 === "y") {
            alert("You are right!");
            i++;
            score++;
        }
    }
};
q4();

function q5() {
    let i = 0;
    while (i < 1) {
        let question5 = prompt("Dev-Ops sleep on bed too? ").toLowerCase();
        console.log(question5);

        if (question5 !== "yes" && question5 !== "y" && question5 !== "no" && question5 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question5 === "no" || question5 === "n") {
            alert(" You are right! that is the end of the first part "+ welcome);
            i++;
            score++;
        } else if (question5 === "yes" || question5 === "y") {
            alert("Sorry! "+ welcome + " majority of them take naps on chairs");
            i++;
        }
    }
};
q5();








function guess(){
    let x;
    let myNum;
    const finder = Math.floor(Math.random() * 10 + 1);
    console.log(finder);
    for(x=1;x<5;x++){
        myNum = prompt("For this section "+welcome+" I have a magic number between 1 and 10, Can you try guessing it? ")
        if (myNum != finder){
            let y = 4-x ;
            if(y==0){
                alert("sorry! but the number is "+myNum)
            }else if(myNum < finder){
                alert("your guess is too low")   
                alert("please try again, you have "+ y+" attempt(s) left")
            }else if(myNum > finder){
                alert("your guess is too high")   
                alert("please try again, you have "+ y+" attempt(s) left")
            }
        }
        else if (myNum == finder){
            alert("wow you read my mind")
            score++;
            break;
        }
    }             
    };

guess();




function ndGuess(){
    const try1 = Math.floor(Math.random() * 10 + 1);
    console.log(try1);
    const try2 = Math.floor(Math.random() * 10 + 1);
    console.log(try2);
    const try3 = Math.floor(Math.random() * 10 + 1);
    console.log(try3);
    let ans = [try1, try2, try3];
   let b;
   let test;
   for(b=1;b<=7;b++){
    test = prompt("This section should be easier "+welcome+" I have 3 magic numbers between 1 and 20, try guessing any of them. ")
    if (test != ans[0] && test != ans[1] && test != ans[2]){
        let y = 7-b ;
        if(y==0){
            alert("sorry! but the numbers are "+ ans[0]+", "+ans[1]+" & "+ ans[2])
        } 
        else if(y==1){
            alert("please try again, you have "+ y+" attempt left")
        }
        else {  
            alert("please try again, you have "+ y+" attempts left")
        }
    }
    else if (test == ans[0] || test == ans[1] || test == ans[2] ){
        alert("wow you read my mind")
        score++;
        break;
    }
}             
};

ndGuess();


alert(welcome+" your score is "+score);

//
};

