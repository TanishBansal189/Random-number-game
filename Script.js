let btn1=document.querySelector(".btn")
let sec1=document.querySelector(".section-1")
let sec2=document.querySelector(".section-2")
let sec3=document.querySelector(".section-3")
let body=document.querySelector("body")
let btn2=document.querySelector(".btn2")
let result=document.querySelector("#output")
let btn3=document.querySelector(".hide")
let chance=0;
let num;
let val;
const generate=()=>{
     num=Math.floor((Math.random()*100) +1)
}
btn1.addEventListener("click",()=>{
    sec1.style.display="none";
    sec3.style.display="block";
    body.style.background="#585858"
    setTimeout(() => {
        generate()
        sec3.style.display="none";
        sec2.style.display="flex";
        body.style.background="white"
    }, 3000)});
btn2.addEventListener("click",()=>{
    val=document.querySelector("#inp").value
    val=Number.parseInt(val)
    if(val==num){
        score=100-chance
        result.innerText= `Congratulations ! You guessed the right number \n score = ${score}`;
        result.style.color="green";
        btn3.classList.remove("hide")
    }
    else if (val>num){
        result.innerText="Your number is bigger than the guessed number";
        result.style.color="red"
        chance++;
    }
    else{
        result.innerText="Your number is smaller than the guessed number";
        result.style.color="red"
        chance++
    }
})
btn3.addEventListener("click",()=>{
    chance=0
    document.querySelector("#inp").value="";
    btn3.classList.add("hide")
    result.innerText="";
    sec1.style.display="none";
    sec2.style.display="none";
    sec3.style.display="block";
    body.style.background="#585858"
    setTimeout(() => {
        generate()
        sec3.style.display="none";
        sec2.style.display="flex";
        body.style.background="white"
    }, 3000)
})































// let num=Math.floor(Math.random()*100 +1);
// let chance=0;
// let btn=document.querySelector(".btn")
// let val=document.querySelector("#answer")
// let p=document.querySelector("#undefined")
// let scoring=document.querySelector("#score")

// btn.addEventListener("click",()=>{
//     let i=Number.parseInt(val.value)
//   do {
//         if (i<num){
//             p.innerText="number is less than the original number";
//         }
//         else{
//             p.innerText="number is greater than the original number"
//         }
//         chance++;
//         let search=document.createElement("input")
//         p.before(search)
//     } while(i!=num)
//    if (i==num){
//     scoring.classList.remove("hide")
//    }
//    score=100-chance
//    scoring.innerText=score;
// })
