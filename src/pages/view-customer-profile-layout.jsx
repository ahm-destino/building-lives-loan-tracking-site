import ContactInfoCard from "../components/customer-profile-components/contact-info-card"
import CustomerBalanceCard from "../components/customer-profile-components/customer-balance-card"
import ShortCutcard from "../components/customer-profile-components/action-shortcut-card"
import Operations from "../components/customer-profile-components/operation-list-card"
import NewAction from "../components/customer-profile-components/customer-action-btn"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function CustomerProfile(){
    const navigate = useNavigate()
    const location = useLocation()
    const userDetails = location['state']; 

    function back() {
        navigate(-1)
    }

    const transHist = userDetails.transaction_history
    const moneyReceived = transHist.filter(el => el.id === 'I Recieved');
    let totalMoneyRecieved = moneyReceived.map(element => {
         console.log(element.amount);
         return parseInt(element.amount)
    });

    
    const moneyGivenOut = transHist.filter(el => el.id === 'I gave Out');
    let totalMoneyGivenOut = moneyGivenOut.map(element => {
         console.log(element.amount);
         return  parseInt(element.amount)
    });

    totalMoneyRecieved = totalMoneyRecieved.reduce((a, b)=>{
        return a+b
    },0)

    totalMoneyGivenOut = totalMoneyGivenOut.reduce((a, b)=>{
        return a+b
    },0)

    const balance = parseInt(totalMoneyRecieved) - parseInt(totalMoneyGivenOut)

    return(
        <div className="bg-[#f6f7f8] text-slate-800  h-[100vh] ">
            
            <header className=' p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300'>
                <button className='bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 ' onClick={back} ></button>
                <p className='text-xl font-bold'> Customer Profile</p>
                <p></p>
                
            </header>
            <ContactInfoCard userInfo={
                {
                    userName : userDetails.name,
                    phoneNumber : userDetails.phone_number,

                }
            } />
            <CustomerBalanceCard balance={balance} />
            <ShortCutcard prop={
                {
                    totalMoneyRecieved: totalMoneyRecieved,
                    totalMoneyGivenOut: totalMoneyGivenOut,
                    balance: balance,
                    transactionHistory: transHist,
                    userName: userDetails.name,
                    element: userDetails
                }
            } />           
            <Operations transactionHistory= {userDetails.transaction_history} />
            <NewAction uniqueId={userDetails.phone_number} />
        </div>
    )
}
