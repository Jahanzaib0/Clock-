let pk;
let pks;
let uss;
let bs;
let ds;
let As;
let is;
let si;
let date;
let time;
cIv = () => {
    clearInterval(uss);
    clearInterval(bs);
    clearInterval(ds);
    clearInterval(is);
    clearInterval(si);
    clearInterval(pks);
}
PAK.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
    pks = setInterval(() => {
        let pK = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
        document.getElementById("time").innerHTML= "<br>" + pK;
    }, 1000);
});

USA.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
   uss = setInterval(() => {
       let usa = new Date().toLocaleString("en-US",{ timeZone: "America/Chicago" });
        document.getElementById("time").innerHTML= "<br>" + usa;
    }, 1000);
});
BANG.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
   bs = setInterval(() => {
       let b = new Date().toLocaleString("en-US",{ timeZone: "Asia/Dhaka" });
        
        document.getElementById("time").innerHTML= "<br>" + b;
    }, 1000);
});
DUBAI.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
   ds = setInterval(() => {
       let b = new Date().toLocaleString("en-US",{ timeZone: "Asia/Dubai" });
        
        document.getElementById("time").innerHTML= "<br>" + b;
    }, 1000);
});
AFGH.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
   As = setInterval(() => {
       let b = new Date().toLocaleString("en-US",{ timeZone: "Asia/Kabul" });
        
        document.getElementById("time").innerHTML= "<br>" + b;
    }, 1000);
});
IND.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
   is = setInterval(() => {
       let b = new Date().toLocaleString("en-US",{ timeZone: "Asia/kolkata" });
        
        document.getElementById("time").innerHTML= "<br>" + b;
    }, 1000);
});
SRI.addEventListener("click", (e)=>{
    let n = e.target.innerHTML;
    country.innerHTML = n;
    cIv();
   si = setInterval(() => {
       let b = new Date().toLocaleString("en-US",{ timeZone: "Asia/kolkata" });  
        document.getElementById("time").innerHTML= "<br>" + b;
    }, 1000);
});