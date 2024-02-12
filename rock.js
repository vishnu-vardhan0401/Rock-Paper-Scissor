let userscore=0;
let compscore=0;
let choices=document.querySelectorAll('.choice');
let users_score=document.querySelector('.userscore')
let comp_score=document.querySelector(".compscore");
const computerchoice=()=>{
  let optons=['rock','paper','scissors']
let comp=(Math.floor(Math.random()*3));
return optons[comp]
}
computerchoice()
const playgame=(userchoice)=>{

let compch=computerchoice()

if(userchoice==compch){
  document.getElementById('msg').innerHTML='It is a tie!';
  document.getElementById('msg').style.backgroundColor="blue"
}
else if(userchoice=='rock'&& compch=='scissors'||userchoice=='scissors'&&compch=='paper'||userchoice=='paper'&&compch=='rock'){
  userscore++;
  users_score.innerHTML=userscore;
  document.getElementById('msg').innerHTML=`you win! ${userchoice} beats ${compch}`;
  document.getElementById('msg').style.backgroundColor='green'
}
else{
  compscore++;
  comp_score.innerHTML=compscore
  document.getElementById('msg').innerHTML=`you lost! ${compch} beats ${userchoice}`;
  document.getElementById('msg').style.backgroundColor='red'
}
}
choices.forEach((choice)=>{
  
  choice.addEventListener('click',()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice)

  });
})