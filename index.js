class Percents {
    getFirstNumber_1 = document.querySelector('input[type="number"][name="numberOne"]').value
    getSecondNumber_1 = document.querySelector('input[type="number"][name="numberTwo"]').value

    getFirstNumber_2 = document.querySelector('input[type="number"][name="firstNum"]').value
    getSecondNumber_2 = document.querySelector('input[type="number"][name="secondNum"]').value

    getFirstNumber_3 = document.querySelector('input[type="number"][name="firstNum_3"]').value
    getSecondNumber_3 = document.querySelector('input[type="number"][name="secondNum_3"]').value

    getInitCapital_1 = document.querySelector('input[type="number"][name="initCapital_1"]').value
    getYesrsDeposit_1 = document.querySelector('input[type="number"][name="yearsDeposit_1"]').value
    getInterestRate_1 = document.querySelector('input[type="number"][name="interestRate_1"]').value

    getInitCapital_2 = document.querySelector('input[type="number"][name="initCapital_2"]').value
    getYesrsDeposit_2 = document.querySelector('input[type="number"][name="yearsDeposit_2"]').value
    getInterestRate_2 = document.querySelector('input[type="number"][name="interestRate_2"]').value

    getInitCapital_3 = document.querySelector('input[type="number"][name="initCapital_3"]').value
    getYesrsDeposit_3 = document.querySelector('input[type="number"][name="yearsDeposit_3"]').value
    getInterestRate_3 = document.querySelector('input[type="number"][name="interestRate_3"]').value

    createElementDevideZero(elementName,elementId,){
        let createSpan_2 = document.createElement('span');
            createSpan_2.classList.add(`${elementName}`)
        let createText_2 = document.createTextNode('nie dzielimy przez 0')
            createSpan_2.appendChild(createText_2);
        let element_2 = document.getElementById(`${elementId}`)
            element_2.appendChild(createSpan_2)
        let getResultToRemove_2 = document.getElementsByClassName(`${elementName}`)
        if(getResultToRemove_2)
        setTimeout(()=>{
            let elementRemove_2 = document.getElementsByClassName(`${elementName}`)
            elementRemove_2[0].remove()
        }, 1_000)
    }
    createElement(elementName,elementId,result){
        let createSpan_2 = document.createElement('span');
            createSpan_2.classList.add(`${elementName}`)
        let createText_2 = document.createTextNode(result)
            createSpan_2.appendChild(createText_2);
        let element_2 = document.getElementById(`${elementId}`)
            element_2.appendChild(createSpan_2)
        let getResultToRemove_2 = document.getElementsByClassName(`${elementName}`)
        if(getResultToRemove_2)
        setTimeout(()=>{
            let elementRemove_2 = document.getElementsByClassName(`${elementName}`)
            elementRemove_2[0].remove()
        }, 10_000)
    }

    calculation (){
        try{
            let result_1 = 0;
                result_1 = (this.getFirstNumber_1 / 100) * this.getSecondNumber_1;
                this.result = result_1;
            this.createElement("span--result", "new", result_1)
        } catch {
            alert("Upps Err")
        }
    }
    calculation2(){
        try{
           
            let result_2 = 0;
            if(this.getFirstNumber_2 == 0){
               this.createElementDevideZero("span--result2-devideZero", "new--2")
               return 0;
            }
            result_2 =(this.getSecondNumber_2 / this.getFirstNumber_2) * 100; 
                this.result_2 = result_2;
            this.createElement("span--result2", "new--2", result_2)
        }catch{
            alert("Upps Err")   
        }
    }
    calculation3(){
        try{
           
            let result_3 = 0;
            if(this.getFirstNumber_3 == 0){
                this.createElementDevideZero("span--result2-devideZero", "new--3")
                return 0;
             }
                result_3 = (100*this.getSecondNumber_3) / this.getFirstNumber_3; 
                this.result_3 = result_3;
            this.createElement("span--result3", "new--3", result_3)
        }catch{
            alert("Upps Err")   
        }
    }
    calculation4(){
        try{

        let profit_1 = 0
        let formula = this.getInitCapital_1 *(1 + (this.getInterestRate_1 / 100)) ** this.getYesrsDeposit_1
            profit_1 = formula - this.getInitCapital_1
        this.profit_1 = profit_1
        this.createElement("span--result4", "new--4", profit_1)
        }catch{
            alert("Upps Err")   
        }
    }
    calculation5(){
        try{
        let numOfCapitalization = (this.getYesrsDeposit_2 * 12) / 6
        let interestRate = (this.getInterestRate_2) / 2
        let profit_2 = 0
        let formula_2 = this.getInitCapital_2 * (1 + (interestRate / 100)) ** numOfCapitalization
            profit_2 = formula_2 - this.getInitCapital_2
        this.profit_2 = profit_2
        this.createElement("span--result5", "new--5", profit_2)
        }catch{
            alert("Upps Err")   
        }
    }
    calculation6(){
         try{
            let months = 12 ;
            let montthMultipler = months * 100;
            let profit_3 = 0;
            let formula_3 = this.getInitCapital_3 * (1+(this.getInterestRate_3 / montthMultipler)) ** (months * this.getYesrsDeposit_3)
            profit_3 = formula_3 - this.getInitCapital_3
                this.profit_3 = profit_3
        this.createElement("span--result5", "new--6", profit_3)
        }catch{
            alert("Upps Err")   
        }
    }
}




{ /* block with functions calculating percents and interest percent */

function percentOfNumber(){
let calc_1 = new Percents
    calc_1.calculation()
console.log("Procent z liczby to : ",calc_1.result_1)

}

function PercentOfOneNumbIsOtherNumb(){
    let calc_2 = new Percents
    calc_2.calculation2()
console.log("Jakim procentem jednej liczby jest druga liczba  to = : ",calc_2.result_2)
}
function NumWithPercent(){
    let calc_3 = new Percents
    calc_3.calculation3()
console.log("Jakim procentem jednej liczby jest druga liczba  to = : ",calc_3.result_3)
}
/* interset percent */
function percentInterest_1(){
    let calc_4 = new Percents
    calc_4.calculation4()

console.log("kapitalizacja co rok odestki = ",calc_4.profit_1)
}
function percentInterest_2(){
    let calc_5 = new Percents
    calc_5.calculation5()

console.log("kapitalizacja co 1/2 roku odestki = ",calc_5.profit_2)
}
function percentInterest_3(){
    let calc_6 = new Percents
    calc_6.calculation6()

console.log("kapitalizacja co 1/2 roku odestki = ",calc_6.profit_3)
}

}/* end ---block with functions calculating percent */