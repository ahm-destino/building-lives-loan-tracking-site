import { useNavigate } from "react-router-dom"
export default function StaffOverview(){
    const navigate = useNavigate()
    const staffInfo = JSON.parse(localStorage.getItem('staffInfo'))
    const customersInfo = JSON.parse(localStorage.getItem('customerInfo'))
    
    function getTotalAmountGivenByStaff(staffName) {

        const filteredMoneyGiven = []
        customersInfo.map((el)=>{

            if(el.loanOfficer === staffName){

            el.transaction_history.map((el) => {
                if(el.id === 'I gave Out'){
                console.log(el.amount);
                filteredMoneyGiven.push(el.amount)
                }
            })
            
            }
            
        })
        const totalAmountGiven = filteredMoneyGiven.reduce((a,b)=>{
            return parseInt(a) + parseInt(b)
        },0)
        console.log(totalAmountGiven);
        return totalAmountGiven

    }


    // This function is to get the total amount recieved by a particular staff
    function getTotalAmountRecievedByStaff(staffName) {

    const filteredMoneyRecieved = []

    customersInfo.map((el)=>{

        if(el.loanOfficer === staffName){

        el.transaction_history.map((el) => {
            if(el.id === 'I Recieved'){
            console.log(el.amount);
            filteredMoneyRecieved.push(el.amount)
            }
        })
        
        }
        
    })
    const totalAmountRecieved = filteredMoneyRecieved.reduce((a,b)=>{
        return parseInt(a)+ parseInt(b)
    },0)
    
    console.log(totalAmountRecieved);
    
    return totalAmountRecieved

    }

    // This block of code is to check the number of customers a staff has brought
  function getNumberOfStaffCustomers(staffName){

      let customerCount = 0;
      const count = customersInfo.map(element => {
        if(element.loanOfficer === staffName){
          customerCount += 1
          return staffName
        }
        else{
          return 
        }
      });
     
      return customerCount;
  }



    return( 
        <>
            {
                staffInfo.map((el)=>{

                    return(
                        
                            <div className="bg-white p-[20px] mt-[20px] rounded-[12px] border ">
                                <div className="flex  items-center p-[20px_0] mb-[10px] ">
                                    <p className="material-symbols-outlined flex items-center justify-center text-2xl w-[50px] h-[50px] mr-[20px] bg-blue-200/50  rounded-[50%]">person</p>
                                    <div>
                                        
                                        <p className="text-xl font-medium "> {el.name} </p>
                                        <p className="text-[16px] text-slate-600">{el.phone_number}</p>
                                        
                                    </div>
                                    <button onClick={()=>{ navigate('/view-staff-profile', {state: {currentStaffDetails: el, staffName: el.name }}) }} className="material-symbols-outlined ml-auto p-[20px] hover:bg-slate-200 hover:rounded-[50%] "> more_vert </button>
                                </div>    
                                <hr />
                                <div className=" flex  justify-around mt[10px] p-[20px_0] text-center ">
                                    <div>
                                        <p className="text-xl font-medium">{getTotalAmountGivenByStaff(el.name)}</p>
                                        <p className=" text-sm font-medium text-red-500 ">Total Given Out</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-medium">{getTotalAmountRecievedByStaff(el.name)}</p>
                                        <p className=" text-sm font-medium text-green-500 ">Total Recieved</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-medium">{getNumberOfStaffCustomers(el.name)}</p>
                                        <p className=" text-sm font-medium text-black ">Total Customers</p>
                                    </div>
                                    
                                </div>
                            </div>
                        
                    )
                
                })
            }
        </>
        
     )
}