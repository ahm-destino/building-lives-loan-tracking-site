import { createElement, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import CustomerProfile from '/src/pages/view-customer-profile-layout.jsx'

export default function CustomerListcard({prop}){

    const navigate = useNavigate()
    return(
        <>
        
            {
                
                prop.map((el, i)=>{
                    return(
                        <div id='customerList' className="mt-[30px] bg-white flex flex-col  space-y-[20px] p-[20px] shadow rounded-[12px]">
                            <div className="flex items-center">
                                <p className="material-symbols-outlined flex items-center justify-center text-2xl w-[50px] h-[50px] mr-[20px] bg-blue-200/50  rounded-[50%]">person</p>
                                <div>
                                    <p className="text-lg font-medium "> {el.name}</p>
                                    <p className="text-sm text-slate-600">{el.phone_number}</p>
                                    <p className="text-[10px] mt-[2px]"> {el.transaction_history[0]?.timestamp || '--' }</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className={el.transaction_history[0]?.id === 'I gave Out' ?  "text-red-500 text-xl font-medium" : "text-green-500 text-xl font-medium" }> ₦{el.transaction_history[0]?.amount || 0}</p>
                                    <p className="text-sm text-slate-600">{el.transaction_history[0]?.id || 'No transaction'}</p>
                                </div>
                            </div>
                            <hr />
                            <button onClick={(()=>{
                                navigate('/view-profile',{state: el})
                                window.location.href = 'http://localhost:5173/view-profile'
                                
                            })} className="bg-blue-200/30 hover:bg-blue-200/50 text-slate-700 text-[16px] font-medium  p-[10px] rounded-[12px]"> View Profile </button>
                        </div> 
                    )
                })
            }
        </>
        
    )
}