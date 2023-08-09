/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
            iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', () =>{

        // mudar senha para texto
        if(input.type === 'password'){
            //texto
            input.type = 'text'

            //add icon
            iconEye.classList.add('ri-eye-line')
            //remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }else {

            //de texto para senha
            input.type = 'password'

            //remove icon
            iconEye.classList.remove('ri-eye-line')
            //add icon
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('input-pass','input-icon')