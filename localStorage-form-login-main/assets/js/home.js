const btnLogout = document.querySelector("#btn-logout")

const logout = () => {
    localStorage.removeItem("status")
    window.localtion.href = "../../index.html"
}


btnLogout.addEventListener("click", logout)