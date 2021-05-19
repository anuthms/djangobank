localStorage.setItem("name","anu")
localStorage.clear()
console.log(localStorage.getItem("name"));
localStorage.clear()
let obj={
    id:100,
    name:"abc"
}
localStorage.setItem("data",JSON.stringify(obj))b