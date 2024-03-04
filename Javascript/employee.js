
    fetch("../Jsons/employee.json")
.then((res)=>{
   return  res.json()
})
.then((data)=>{
    console.log(data);
    if(localStorage.getItem('emps')==null)
    {
        localStorage.setItem('emps',JSON.stringify(data));
    }
    showData();
})
.catch(error => {
    console.error('Error fetching data:', error);
  });




function showData()
{
    let emps=[]
    if(localStorage.getItem('emps') !=null)
    {
       emps= JSON.parse(localStorage.getItem('emps'));
    }
    console.log(emps);

    let result='';
    for(let i=0;i<emps.length;i++)
    {
       console.log(emps[i]);
        result+= `<div class="col-3 mx-auto mb-5" id=${emps[i].ID}>
        <div class="card bg-light bg-gradient border rounded-3 mx-auto" style="width: 18rem; padding: 0;">
            <div class="d-flex">
             <img class="rounded-circle float-left m-2 p-1 border border-1 border-secondary " style="width: 100px; height: 100px;" src=${emps[i].img} alt="">
              <div class="my-2 ">
                 <h6><b>ID: ${emps[i].ID}</b></h6>
                <h6 style="font-size: small;">${emps[i].Employe_Name}</h6>
                <h6 style="font-size: smaller;" class="text-muted">${emps[i].Employe_post}</h6>
            
              </div>
            </div>
             <div class="card-body">
                 <h5 class="card-title">Salary: <span class="salary">${emps[i].Salary}</span> </h5>
                 <h5 class="card-title">Loan: <span class="loan">${emps[i].Loan}</span> </h5>
                 
                <h5 class="card-title">Payable Salary: <span class="payableSalary">${emps[i].Payable_Salary}</span></h5>
                <h5 class="card-title">Salary Month: <span class="salaryMonth">${emps[i].Salary_month}</span></h5>
                <div class="text-center m-1 pt-2">
                 <a href="#" class="btn btn-outline-primary">Pay Salary</a>
                </div>
             </div>
         </div>
     </div>`;
    }
    
    let element = document.getElementById('emps');
    element.innerHTML=result;
}
showData();



