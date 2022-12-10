//prime problem

let num= 23;
function checkprime(num){

let check=true;

for (let i=2; i<num; i++){
  if (num%i==0){
    check=false
  }
}
return check
}

if (checkprime(num)==true){
  console.log ("Yes");
} else {
  console.log ("No");
}