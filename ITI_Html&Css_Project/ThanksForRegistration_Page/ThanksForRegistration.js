const typed = new Typed(".typing-animation", {
    strings: ["Information Technology Institute"],
    typeSpeed: 100,
    backSpeed: 30,
    loop: true
});

const thanksStatement = document.getElementById("username");

const url = new URL(location.href);
const username = url.searchParams.get("fullName")

thanksStatement.innerHTML = username;