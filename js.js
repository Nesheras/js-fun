const getNumber = (max=11,min=0)=>Math.floor(Math.random() * (max-min)+min);
const data = []; 
const colors = ["#0396A6aa","#04D9D9aa","#03A6A6aa","#012615aa","#070D06aa"];

const optimizeNumber = (n)=>{
   
    return (n + "").length === 2 ? n : "0"+ n;
}

let n =Math.floor( getNumber(61,1)/6) * 6;
while(n--){
    data.push(getNumber(100));

}
console.log(data);
const box = document.querySelector(".box");
box.innerHTML = "<div class =\"card\"><div/>"
for (const val of data) {
    box.innerHTML += `<div style = "background-color: ${colors[getNumber(colors.length-1)]}" class = "card">${optimizeNumber(val)}<div/>`;
    
}
function showTime( day = new Date(2025,1,7,23)){
    let now = new Date();
    let d,h,m,s;
let time = Math.floor(day - now)/1000;
m = Math.floor(time/60);
s  = time -m*60;
h = Math.floor(m/60);
m -= h*60
d = Math.floor(h/24);
h-= d *24;
return `${d}д. ${h}ч. ${m} мин. ${s} сек.`

}
console.log(showTime());
setInterval(function(){
    box.firstElementChild.innerText = `До окончания осталось${showTime()}`
},1000)

