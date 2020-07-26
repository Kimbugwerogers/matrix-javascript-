
let tm = document.getElementById("time");

setInterval(()=>{
    let date = new Date;
    tm.innerHTML = date;
}, 1000);

