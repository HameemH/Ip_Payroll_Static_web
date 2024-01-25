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