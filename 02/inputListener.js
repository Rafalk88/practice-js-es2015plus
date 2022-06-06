const inputs = document.getElementsByClassName('cart__quantity')

const inputsArr = [...inputs]

const inputEvent = () => {

    inputsArr.forEach(
    
        input => input.addEventListener(

            'input',
            () => console.log(input.value)

        )
    
    )

}

module.exports = inputEvent