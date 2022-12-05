function recoveryPassword() {

    const correo = localStorage.getItem("correoRecovery");
    const numUser = localStorage.getItem("phoneUserRecover");

    const recoverPass = {

        IdProject: "6",
        Phone: numUser,
        Email: correo,
        Password: ""
        
    
    }

    recoveryyPassword(recoverPass)

}

