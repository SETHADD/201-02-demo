'use strict'

let welcome = prompt("Welcome! may I know your name? ");
//console.log(welcome);
alert(welcome+ " welcome to the best user experience")


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
        }
    }
};
function q2() {
    let i = 0;
    while (i < 1) {
        let question2 = prompt("Is london 2hrs away from Peterborough by car? ").toLowerCase();
       // console.log(question2);

        if (question2 !== "yes" && question2 !== "y" && question2 !== "no" && question2 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question2 === "no" || question2 === "n") {
            alert("ou are right! ");
            i++;
        } else if (question2 === "yes" || question2 === "y") {
            alert("Sorry! but that is true");
            i++;
        }
    }
};
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
        } else if (question3 === "yes" || question3 === "y") {
            alert("Sorry! That is not right");
            i++;
        }
    }
};
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
        }
    }
};
function q5() {
    let i = 0;
    while (i < 1) {
        let question5 = prompt("Dev-Ops sleep on bed too? ").toLowerCase();
        console.log(question5);

        if (question5 !== "yes" && question5 !== "y" && question5 !== "no" && question5 !== "n") {
            alert("Please provide a yes/y or no/n answer on the next try");
        } else if (question5 === "no" || question5 === "n") {
            alert(" You are right! that is the end of the quiz "+ welcome);
            i++;
        } else if (question5 === "yes" || question5 === "y") {
            alert("Sorry! "+ welcome + " majority of them take naps on chairs");
            i++;
        }
    }
};
