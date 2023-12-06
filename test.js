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

let assert = "h1 (1-es szintű címsor) létrehozva";
let h1 = document.querySelector("h1");
console.log(showTestsResults(assert,h1))

assert = "1-es szintű címsor tartalma a mintának megfelelő";
showTestsResults(assert,h1?.textContent == "Arany Napfény Utazási Iroda")

assert = "Az 1-es címsor betűszíne arany."
let h1Style = window.getComputedStyle(h1)
console.log(h1Style.color)
showTestsResults(assert, h1Style?.color == "rgb(255, 215, 0)")
