const getNumber = (max=11,min=0)=>Math.floor(Math.random() * (max-min)+min);
const data = []; 

const optimizeNumber = (n)=>{
   
    return (n + "").length === 2 ? n : "0"+ n;
}

let n = getNumber(40,1);
while(n--){
    data.push(getNumber(100));

}
console.log(data);
const box = document.querySelector(".box");
for (const val of data) {
    box.innerHTML += `<div class = "card">${optimizeNumber(val)}<div/>`;
    
}