import StaffShortCutcard from "../components/staff-profile-components/action-shortcut-card"
import StaffContactInfoCard from "../components/staff-profile-components/contact-info-card"
import StaffCustomerBalanceCard from "../components/staff-profile-components/customer-balance-card"
import StaffCustomersOperations from "../components/staff-profile-components/operation-list-card"
import { useNavigate, useLocation } from "react-router-dom"
export default function Staffprofile(){

    const staffInfo = JSON.parse(localStorage.getItem('staffInfo'))
    const customersInfo = JSON.parse(localStorage.getItem('customerInfo'))

    const navigate = useNavigate()
    const location = useLocation()

    const currentStaffDetails = location.state.currentStaffDetails
    const staffName = location.state.staffName
    console.log(staffName.phone_number);
    



    function back() {
        navigate(-1)
    }

          //This block of code is to get the total amount given out by a particular staff
    function getTotalAmountGivenByStaff(staffName) {
    
      const filteredMoneyGiven = []
      customersInfo.map((el)=>{
    
        if(el.loanOfficer === staffName){
    
          el.transaction_history.map((el) => {
            if(el.id === 'I gave out'){
              console.log(el.amount);
              filteredMoneyGiven.push(el.amount)
            }
          })
          
        }
        
      })
      const totalAmountGiven = filteredMoneyGiven.reduce((a,b)=>{
        return parseInt(a)+ parseInt(b)
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
      const totalAmountGiven = filteredMoneyRecieved.reduce((a,b)=>{
        return parseInt(a) + parseInt(b)
      },0)
      console.log(totalAmountGiven);
      return totalAmountGiven
    
    }
    

    const balance = getTotalAmountRecievedByStaff(staffName) - getTotalAmountGivenByStaff(staffName)
    console.log(balance);
    


    return(
        <>
            <header className=' p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300'>
                <button className='bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 ' onClick={back} ></button>
                <p className='text-xl font-bold'> Staffs Profile</p>
                <p></p> 
            </header>

            <StaffContactInfoCard staffInfo={currentStaffDetails} />
            <StaffCustomerBalanceCard balance={balance} />
            <StaffShortCutcard prop={customersInfo} />
            <StaffCustomersOperations prop={{customersInfo: customersInfo, staffName: staffName }} />
        </>
    )
}