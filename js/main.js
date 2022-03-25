class TipCalculator {

    constructor(amountTextElement, tipxPersonTextElement){
        this.amountTotalTxt = amountTextElement;
        this.tipxPersonTxt = tipxPersonTextElement;
        this.percentage = 5;  // default value              
        this.billxPerson = 0;
    }

    setBillAmount(amount){
        this.billAmount = amount;
    }

    setNumPeople(numPeople){
        this.numPeople = numPeople;
    }

    setPercentage(percentage){
        this.percentage = percentage / 100;
    }

    calculateBillXPerson(){
        this.billxPerson = parseFloat(this.billAmount) / this.numPeople;
    }

    calculateTipAmountPerson(){
        this.tipxPerson = (this.billxPerson * this.percentage).toFixed(2);
    }

    calculateTotal(){
        this.amountTotal = (this.billxPerson + +this.tipxPerson).toFixed(2);        
    }

    display(){
        this.amountTotalTxt.textContent = '$'+this.amountTotal;
        this.tipxPersonTxt.textContent = '$'+this.tipxPerson;       
    }

    refresh(){
        this.calculateBillXPerson();
        this.calculateTipAmountPerson();
        this.calculateTotal();
        this.display();
    }

    reset(){
        this.amountTotalTxt.textContent = this.tipxPersonTxt.textContent = '$0.00'; 
        this.billAmount = this.numPeople = 0;
    }
    
}

// declare page items
const tipxPersonTextElement = document.querySelector('[data-person]');
const amountTotalTextElement = document.querySelector('[data-total]');
const inputBillAmount = document.querySelector('[data-billAmount]');
const inputNumPeople = document.querySelector('[data-people]');
const btnPercentage = document.querySelectorAll('[data-number]');
const btnCustom = document.querySelector('[data-custom]');
const btnReset = document.querySelector('[data-reset]');

const tipCalculator = new TipCalculator(amountTotalTextElement,tipxPersonTextElement); 

// percentage button click event
btnPercentage.forEach(btn => {
    btn.addEventListener('click',(event)=>{        
        tipCalculator.setPercentage(event.target.innerText);
        tipCalculator.refresh()
    })
})
// input bill amount
inputBillAmount.addEventListener('change',(event)=>{    
    tipCalculator.setBillAmount(event.target.value)
})

// input number of people
inputNumPeople.addEventListener('change', (event) => {    
    tipCalculator.setNumPeople(event.target.value)
})

// reset button click event
btnReset.addEventListener('click', () =>{
    tipCalculator.reset();
    inputNumPeople.value = inputBillAmount.value = 0;
})