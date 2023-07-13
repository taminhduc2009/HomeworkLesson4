//bài 1
localStorage.setItem("name","Duc")
localStorage.setItem("namee","Minh")
localStorage.setItem("nameee","Phuoc")

let name=localStorage.getItem('name')
let namee=localStorage.getItem('namee')
let nameee=localStorage.getItem('nameee')


localStorage.removeItem("nameee")


// localStorage.clear()

//bài 2
setTimeout(function(){
    console.log("She sleep alone");
}, 1000);
setTimeout(function(){
    console.log("My heart want to come home");
}, 2000);
setTimeout(function(){
    console.log("I wish I was");
}, 3000);
setTimeout(function(){
    console.log("I wish I was");
}, 4000);
setTimeout(function(){
    console.log("Beside you");
}, 5000);