function compoundIntrest(principal,rate,time){
    let amount=principal*(Math.pow*(1+rate/100,time));
    let CI=amount-principal;
    return CI;
}
console.log(compoundIntrest(10000,5,2));


let input1=prompt("enter a number");
console.log(input1);
let input2=prompt("enter a number");
console.log(input2);
let input3=prompt("enter a number");
console.log(input3);
let CI=compoundIntrest(input1,input2,input3);
console.log("the compound intrest is"+CI);

age=23
if (age>=18){
    console.log("you are eligible")
}else{
    console.log("you are not eligible")
}
age=13
if(age>=18){
    console.log("your eligible for vote")
}else{
    console.log("your not eligible for vote")
}


marks=80
if(marks>=36){
    console.log("you are pass")
}else{
    console.log("you are faile")
}


marks=70
if(marks>=90){
    console.log("grade:A");
}else if(marks>=70){
    console.log("grade:B");
}else if(marks>=50){
    console.log("grade:C");
}else if(marks>=45){
    console.log("grade:D");
}else{
    console.log("grade:E");
}
let speed =30;
let maxspeed=120;
let totalMinutes=96;
let distance=0;

for (let elapsed=0;elapsed<totalMinutes;elapsed+=10){
    let currentspeed=Math.min(speed,maxspeed);
distance+=currentspeed*(10/60);
if(speed<maxspeed)speed*=1;
}
console.log("distance="+distance+"km");



                                                                                                                                                                                               
