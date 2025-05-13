const inputLogin = document.querySelector("#log-usuario")
const inputPassword = document.querySelector("#log-senha")
const btnLogin = document.querySelector("#signInBtn")

const loginAuto = () => {
     let status = localStorage.getItem("status")

     if(status == "true") {
        window.localStorage.href = "../../pages/home.html"
     }
    }
    loginAuto()
    
    btnLogin.addEventListener("click", login)

const login = () => {
    let userLogin = inputLogin.Value 
    let userPassword = inputPassword.Value 

    let cadastroLogin = localStorage.getItem("user")
    let cadastroSenha = localStorage.getItem("password")


if(userLogin = cadastroLogin && userPassword == cadastroSenha) {
      localStorage.setItem("status", "true")

      setTimeout(() => { 
     window.location.href = `../pages/home.html` 
     alert("Login realizado com sucesso!")
    }, 1000) ;
     return
}

alert("usuario ou senha incorreto!")

}

btnLogin.addEventListener("click", Login)
