const button = document.getElementById('button') //pegando o botão e colocando dentro de uma variável
const input = document.getElementById('input-real') //pegando o input e colocando dentro de uma variável
const select = document.getElementById('currency-select') //pegando o select e colocando dentro de uma variável

const clickButton = async () => {


    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(res => res.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

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