document.addEventListener('DOMContentLoaded', () => {
console.log('DOM')

const btnEl = document.querySelector('.cart__btn-calculate')
const totalPrice = document.querySelector('.cart__total-price')
const inputList = document.getElementsByClassName('cart__quantity')

if (btnEl && totalPrice) {
    
    btnEl.addEventListener(

        'click',
        () => {

        let total = 0;
        [...inputList].forEach( 
        
                item => {
            
                    const {dataset: {price}, value} = item
                    total += price * value
                    totalPrice.innerText = total
                
                }

        )

        }

    )
}

})