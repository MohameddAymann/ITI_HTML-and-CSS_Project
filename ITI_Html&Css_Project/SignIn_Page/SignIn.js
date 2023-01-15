const form = document.querySelector("form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const usenNameRegExp = /^[a-z0-9_-]{3,16}$/i;
const passwordRegExp = /^[a-z0-9_-]{8,}$/i;


username.addEventListener("change", (e)=> {
    if(!username.validity.valid || !usenNameRegExp.test(username.value)){
        document.querySelector(".forUsername p").innerHTML = "Invalid Username"
        e.preventDefault();
    }else{
        document.querySelector(".forUsername p").innerHTML = ""
    }
})
password.addEventListener("change", (e)=> {
    if(!password.validity.valid || !passwordRegExp.test(password.value)){
        document.querySelector(".forPassword").innerHTML = "Minimun eight characters"
        e.preventDefault();
    }else{
        document.querySelector(".forPassword").innerHTML = ""
    }
})



form.addEventListener("submit", (e)=> {
    if(!username.validity.valid || !usenNameRegExp.test(username.value)){
        document.querySelector(".forUsername p").innerHTML = "Invalid Username"
        e.preventDefault();
    }else{
        document.querySelector(".forUsername p").innerHTML = ""
    }

    
    if(!password.validity.valid || !passwordRegExp.test(password.value)){
        document.querySelector(".forPassword").innerHTML = "Minimun eight characters"
        e.preventDefault();
    }else{
        document.querySelector(".forPassword").innerHTML = ""
    }
})


