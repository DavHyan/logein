let personInfo;
let set = new Set();

function information(){
    let mail = document.getElementById('mail').value;
    let password = document.getElementById('password').value;
    let passwordRipet = document.getElementById('passwordRipet').value;
    if(!mail){
      return alert("sxal eq grel")
    }
    if(password.length < 8){
      return alert("8 hat gri")
    }
    if(password != passwordRipet ){
      return alert('sxal eq grel');
    }
     personInfo = {
      'mail':mail,
      'password':password,
      'passwordRipet':passwordRipet
    }
    set.add(personInfo)
    localStorage.setItem("personInfo",JSON.stringify(personInfo))
    localStorage.setItem('hello',"world")
}

function checkInformation(){
  
  let mail = document.getElementById('password1').value;
  let password = document.getElementById('passwordRipet1').value;
  for(let key of set){

    if(key.password == password && key.passwordRipet == password && key.mail == mail){
       return alert("chishta");
    }
    
  }
  return alert("sxala")
}  
  let btn = document.getElementById('toCheck');
  
btn.addEventListener('click', function(){
    let input = document.getElementById('password')
    if(input.type == "password"){
      input.type = "text;"
    }else{
      input.type = "password"
    }
})

let btn2 = document.getElementById("toCheck2");

btn2.addEventListener('click', function(){
  let input = document.getElementById('passwordRipet')
    if(input.type == "password"){
      input.type = "text;"
    }else{
      input.type = "password"
    }
})

let btn1 = document.getElementById("toCheck3");

btn1.addEventListener("click", function(){
  let input = document.getElementById('passwordRipet1')
    if(input.type == "password"){
      input.type = "text;"
    }else{
      input.type = "password"
    }
})
