


export function validate(userData) {
    const regexEmail = /\S+@\S+\.\S+/;
    const errors = {};
    const regexPassword = new RegExp("[0-9]");
    console.log(userData.email);
    if (!regexEmail.test(userData.email)) {
        errors.email = 'Debe ingresar un email valido';
    }
    if (!userData.email) {
        errors.email = "Ingrese un email.";
    if(userData.email.length> 35){
        errors.email = "No mayor a 35 caracteres."
    }    
    }
    if (!userData.password) {
        errors.password = "Ingrese una contraseña.";
    }
    return (errors);
}
