import { useNavigate } from "react-router-dom";
export default function StaffCustomersOperations({prop}){
    const navigate = useNavigate()
    const customerInfo = prop.customersInfo
    const staffName = prop.staffName
    console.log(staffName);

    const filteredCustomers =  customerInfo.filter((el)=>{
        return(
            el.loanOfficer === staffName
        )
    })

    console.log(filteredCustomers);
    
    

    return(
        <div className="m-[30px_0]" >
            <div className=" m-[30px_0] ">
                <p className="text-[16px] text-blue-500 font-bold">Operations </p>
            </div>

            {
 
                filteredCustomers.map((el)=>{
                    return(
                        <button onClick={(()=>{ navigate('/view-profile',{state: el})} )} className="flex items-center gap-[20px] w-full bg-white p-[20px] m-[20px_0] rounded-[12px] border border-gray-200">
                            <p className="material-symbols-outlined text-xl text-black bg-blue-100/50 p-[15px_20px] rounded-[50%]"> person</p>
                            <div>
                                <p className="text-[16px] font-medium"> {el.name}</p>
                                <p className="text-xs text-green-600">{}</p>
                            </div>
                            <div className="ml-auto">
                                <p className={ el.id == 'I gave Out' ? "text-red-500 text-xl font-medium": "text-green-500 text-xl font-medium"}> {el.transaction_history.length}</p>
                                <p className="text-sm text-slate-600 text-right"> Transactions made </p>
                            </div>
                        </button>
                    )
                    
                })
            }  
        
        </div>
    )
}


                    