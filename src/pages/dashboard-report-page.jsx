import DashBoardReportBalanceCard from "../components/dashboard-report-components/balance-card"
import DashboardReportOperationsList from "../components/dashboard-report-components/operation-list"
import { useNavigate } from "react-router-dom"
export default function DashboardReport({prop}) {
    const navigate = useNavigate()
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
            <DashBoardReportBalanceCard transactionHistory={prop.map(el => {
                return el.transaction_history
            })} />
            <DashboardReportOperationsList />
        </>
    )
}