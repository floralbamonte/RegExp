/*  Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/

const input = document.querySelector("input");
const form = document.querySelector("form")

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        let valorContr = input.value;
        let regexp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{12,}$/g;
        if (regexp.test(valorContr)) {
            alert("Contraseña correcta, Bienvenid@!");
        } else {
            alert("¡CONTRASEÑA INCORRECTA!");
        }
    });
    






