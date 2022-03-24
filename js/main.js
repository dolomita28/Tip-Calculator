class TipCalculator {

    constructor(amount, tipxPerson, inputBill, inputNumPeople){
        this.amountTotal = amount;
        this.tipxPerson = tipxPerson;
        this.percentage = 5;
        this.billAmount = inputBill;
        this.numPeople = inputNumPeople;
        this.billxPerson = 0;

    }

    setBillAmount(amount){
        console.log('setbillamount', amount)
        this.billAmount = amount;
    }

    setNumPeople(numPeople){
        console.log('setnumpeople', numPeople)
        this.numPeople = numPeople;
    }

    setPercentage(percentage){
        console.log('setpercentage', percentage)
        this.percentage = percentage / 100;
    }

    calculateBillXPerson(){
        console.log('calculate bill x person',this.billAmount, this.numPeople);
        // this.billxPerson = Math.round(parseFloat(this.billAmount) / this.numPeople);
        this.billxPerson = parseFloat(this.billAmount) / this.numPeople;
        console.log('bill x person', this.billxPerson)
    }

    calculateTipAmountPerson(){
        if (!this.percentage)
            return;
        console.log('calculate amount x person',this.billAmount, this.percentage);
        this.tipxPerson = (this.billxPerson * this.percentage).toFixed(2);
    }

    calculateTotal(){
        console.log('calculate total',this.billxPerson, this.tipxPerson);
        this.amountTotal = (this.billxPerson + +this.tipxPerson).toFixed(2);
        
    }

    refresh(){
        this.calculateBillXPerson();
        this.calculateTipAmountPerson();
        this.calculateTotal();
        this.display();
        console.log('tip per person',this.tipxPerson);
        console.log('total amount', this.amountTotal);
    }

    reset(){
        this.amountTotal.textContent = this.tipxPerson.textContent = this.billAmount.value = this.numPeople.value ='0'; 
    }

    display(){
        amountTotal.textContent = '$'+this.amountTotal;
        tipxPerson.textContent = '$'+this.tipxPerson;
        console.log('display', amountTotal.textContent, tipxPerson.textContent)
    }
}
const billAmount = document.querySelector('[data-billAmount]');
const tipxPerson = document.querySelector('[data-person]');
const amountTotal = document.querySelector('[data-total]');
const numPeople = document.querySelector('[data-people]');
const btnPercentage = document.querySelectorAll('[data-number]');
const btnCustom = document.querySelector('[custom]');
const btnReset = document.querySelector('[data-reset]');

const tipCalculator = new TipCalculator(amountTotal,tipxPerson, billAmount, numPeople); 

btnPercentage.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        console.log('percentage', event.target.innerText);
        tipCalculator.setPercentage(event.target.innerText);
        tipCalculator.refresh()
    })
})

billAmount.addEventListener('change',(event)=>{
    console.log('billamount', event.target.value);
    tipCalculator.setBillAmount(event.target.value)
})

numPeople.addEventListener('change', (event) => {
    console.log('numpeople', event.target.value);
    tipCalculator.setNumPeople(event.target.value)
})

btnReset.addEventListener('click', () =>{
    tipCalculator.reset();
})