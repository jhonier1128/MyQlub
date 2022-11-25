function LoginPersona() {

    const loginPersona = {

        Usuario: "",
        Login: $("#loginUser").val(),
        IdProyecto: "6",
        Password: $("#passwordUser").val(),

    }

    login(loginPersona)

}