import UserProfileReportBalanceCard from "../components/customer-profile-report-components/balance-card"
import UserProfileReportOperationsList from "../components/customer-profile-report-components/operation-list"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
export default function UserProfileReport() {
    const location = useLocation()
    const navigate = useNavigate()
    const prop = location.state
    console.log(prop.userName);
    
    function back() {
        navigate(-1)
    }
    return(
        <>
            <header className=' p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300'>
                <button className='bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 ' onClick={back} ></button>
                <p className='text-xl font-bold'> Reports </p>
                <p></p>
            </header>
            <UserProfileReportBalanceCard transactionHistory={prop.transactionHistory} />
            <UserProfileReportOperationsList prop ={{transactionHistory: prop.transactionHistory, userDetails: prop.element, name: prop.userName}} />
        </>
    )
}
// {
//                     totalMoneyRecieved: totalMoneyRecieved,
//                     totalMoneyGivenOut: totalMoneyGivenOut,
//                     balance: balance,
//                     transactionHistory: transHist,
//                     userName: userDetails.name

//                 }