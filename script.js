document.getElementById("financebtn").addEventListener("click", ComapanyFinance);
function ComapanyFinance() 
{
    const cashAdd =parseFloat( document.getElementById("cashAdd").value);
    const loan =parseFloat( document.getElementById("loan").value);
    const expen =parseFloat( document.getElementById("expen").value);
    
    let companyFund=document.getElementById("cp")
    let companyExpense=document.getElementById("ce")
    let companyloan=document.getElementById("cl")
    
    companyFund.innerHTML=Number(companyFund.textContent)+cashAdd;
    companyExpense.innerHTML=Number(companyExpense.textContent)+expen;
    companyloan.innerHTML=Number(companyloan.textContent)-loan;
  
   
    
}


function salaryFunction(){
    let getId=document.getElementById("emId").value;
    let getLeave=document.getElementById("leave").value;
    let bonus=document.getElementById("bonus").value;
    let loanPay=document.getElementById("emLoan").value;


    let element= document.getElementById(getId);
    let salaryElement = element.querySelector(".salary");
    let loanElement =element.querySelector(".loan")
    
    let LeaveAmount=parseInt(getLeave)*300;
    let salary = parseInt(salaryElement.textContent);
    let loan=parseInt(loanElement.textContent);

    salary=(salary+parseFloat(bonus))-parseFloat(loanPay)-LeaveAmount;
    loan=loan- parseFloat(loanPay);

    salaryElement.innerHTML=salary;
    loanElement.innerHTML=loan;


}