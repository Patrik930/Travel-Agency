let olDOM=document.createElement('ol')
olDOM.style.marginTop='20px'
olDOM.style.border='1px solid gray'
document.body.appendChild(olDOM)


const showTestsResults=(assert,result)=>{
    if (result) 
        olDOM.innerHTML+=`<li>${assert} ✅</li>`
    else 
        olDOM.innerHTML+=`<li>${assert} ❌</li>`
}

let assert = "h5 (5-ös szintű címsor) létrehozva";
let h5 = document.querySelector("h5");
console.log(showTestsResults(assert,h5))