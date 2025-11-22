import { useLocation, useNavigate } from "react-router-dom"
import ReportActionBtn from "./action-btn"

export default function ReportPageLayout(){
    const navigate = useNavigate()
    const location = useLocation()

    const name = location.state.name
    const amount = location.state.amount
    const id = location.state.id
    const currentElement =location.state.element
    const currentTransaction = location.state.currentTransaction

    

    function back() {
        navigate(-1)
    }

    return(
        <>
            <header className=' p-[0_0_10px] m-[0_0_30px] flex justify-between items-center border-b border-slate-300'>
                <button className='bi bi-arrow-left p-[10px_15px] rounded-[50%] text-2xl text-black hover:bg-slate-200 ' onClick={back} ></button>
                <p className='text-xl font-bold'> {name}</p>
                <p></p>          
            </header>
            <div className="flex flex-col bg-white rounded-lg p-[20px] shadow ">
                <p className="text-sm text-gray-600"> {id} </p>
                <p className={ id === "I gave Out" ? 'text-red-600 text-2xl font-bold' : 'text-green-600 text-2xl font-bold' } > N{amount} </p>
                <p className={ id === "I gave Out" ? "self-start text-xs text-red-600 bg-red-500/10  p-[5px_10px] rounded-[8px] " : "self-start text-xs text-green-600 bg-green-500/10  p-[5px_10px] rounded-[8px] "}> Balance: N{amount} </p>
            </div>

            <ReportActionBtn prop={{currentElement: currentElement, currentTransaction: currentTransaction }} />
        </>
    )
}