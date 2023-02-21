const button = document.getElementById('button')
const input = document.getElementById('input-real')
const select = document.getElementById('currency-select')

const dolar = 5.17
const euro = 5.52
const bitcoin = 128283.71

const clickButton = () => {
    const valueReal = input.value
    const conversaoDolar = valueReal / dolar
    const conversaoEuro = valueReal / euro
    const conversaoBitcoin = valueReal / bitcoin 
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(valueReal)

    if(select.value === 'US$ Dólar Americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD' 
        }).format(conversaoDolar)
        

    }
    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', { 
            style: 'currency', 
            currency: 'EUR' 
        }).format(conversaoEuro)

    }
    if(select.value === 'Bitcoin'){
        currencyValueText.innerHTML = conversaoBitcoin.toFixed(7)
    }

    

}

const changeInput = () => {
    const currencyImage = document.getElementById('currency-image')
    const currencyName = document.getElementById('currency-name')

    if(select.value === 'US$ Dólar Americano'){
        currencyImage.src = './assets/usa.png'
        currencyName.innerHTML = 'Dólar Americano'

    }
    if(select.value === '€ Euro'){
        currencyImage.src = './assets/euro.png'
        currencyName.innerHTML = 'Euro'

    }
    if(select.value === 'Bitcoin'){
        currencyImage.src = './assets/bitcoin.png'
        currencyName,innerHTML = 'bitcoin'

    }
    clickButton()
}

button.addEventListener('click',clickButton)
select.addEventListener('change',changeInput)