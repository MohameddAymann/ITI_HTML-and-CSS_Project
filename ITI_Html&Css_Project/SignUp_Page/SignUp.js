const form = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const fullNameRegExp = /^([a-z]{3,} )([a-z]{3,} )?([a-z]{3,})/i;
const usenNameRegExp = /^[a-z0-9_-]{3,16}$/i;
const passwordRegExp = /^[a-z0-9_-]{8,}$/i;


 
fullName.addEventListener("change", (e)=> {
    if(!fullName.validity.valid || !fullNameRegExp.test(fullName.value)){
        document.querySelector(".forName p").innerHTML = "Invalid Name"
        e.preventDefault();
    }else{
        document.querySelector(".forName p").innerHTML = ""
    }
})
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
    if(!fullName.validity.valid || !fullNameRegExp.test(fullName.value)){
        document.querySelector(".forName p").innerHTML = "Invalid Name"
        e.preventDefault();
    }else{
        document.querySelector(".forName p").innerHTML = ""
    }


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



