const eage = document.getElementById("eage");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
let age;

btn.onclick = function(){
    age = eage.value;
    if(age >= 18){
        output.textContent = "You are old enough to vote!";
    }
    else if(age < 0){
        output.textContent = "there is no negative age!";
    }
    else{
        output.textContent = "you are not enough to vote!";
    }
}