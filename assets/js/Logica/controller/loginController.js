function LoginPersona() {

    const loginPersona = {

        UserName: $("#loginUser").val(),
        Password: $("#passwordUser").val(),
        IdProject: "6"
    
    }

    login(loginPersona)

}