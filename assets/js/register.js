const inputUser = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const inputConfirmPassword = document.querySelector("#log-confirmar-senha")
const btnRegister = document.querySelector("#SignInBtn")

const cadastroUsuario = () => {
    let user = inputUser.value
    let Password = inputPassword.value
    let confirmPassword = inputConfirmPassword.value  

     if(user.trim() != "" && Password == confirmPassword) {
        localStorage.setItem("user", user)
        localStorage.setItem("password", Password)
        window.location.href = "../../index.html"
        alert("Usuário cadastrado com sucesso!")
        return;
    }

     alert("Confirmação de senha incorreta!")
}


btnRegister.addEventListener("click" , cadastroUsuario)