
function login() {

    let username = document.querySelector("#username");

    let password = document.querySelector("#password");

    if ( username.value == "Username" && password.value == "Password") {

        document.getElementById("msg").innerHTML = "Success";

    } else {

        document.getElementById("msg").innerHTML = "Wrong Information";

    }
}

