import { useNavigate } from "react-router-dom";

export default function DashboardReportOperationsList() {
    const navigate = useNavigate()
    const customersInfo = JSON.parse(localStorage.getItem('customerInfo'))
    console.log(customersInfo);

    
    return(
        <>
            {
                
                customersInfo.slice().reverse().map((element)=>{
                    
                    return( element.transaction_history.map((el)=>{
                        return(
                           
                                <button className="flex items-center w-full gap-[20px] bg-white p-[20px] m-[20px_0] rounded-[12px] border border-gray-200" onClick={(()=>{
                                   
                                    navigate('/report-action', {
                                        state: {
                                            name: element.name,
                                            id: el.id,
                                            amount: el.amount,
                                            element: element,
                                            currentTransaction: el
                                        }
                                    })
                                    console.log(element.name);
    
                                })}>
                                    <p className="bi bi-arrow-down text-xl text-black bg-blue-100/50 p-[15px_20px] rounded-[50%]"></p>
                                    <div className="flex flex-col text-left">
                                        <p className="text-[16px] font-medium"> {element.name}</p>
                                        <p className="text-xs text-green-600">2 days Ago</p>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <p className={ el.id == 'I gave Out' ? "text-red-500 text-xl font-medium": "text-green-500 text-xl font-medium"}> ₦{el.amount}</p>
                                        <p className="text-sm text-slate-600 text-right"> {el.id}</p>
                                    </div>
                                </button>
                        
                        )
                    })
                )
                })
            }
        </>
    )
}