export default function Operations({transactionHistory}){
    return(
        <div className="m-[30px_0]" >
            <div className=" m-[30px_0] ">
                <p className="text-[16px] text-blue-500 font-bold">Operations </p>
            </div>
            {
                transactionHistory.map((el)=>{
                    return(
                        <div className="flex items-center gap-[20px] bg-white p-[20px] m-[20px_0] rounded-[12px] border border-gray-200">
                            <p className="bi bi-arrow-down text-xl text-black bg-blue-100/50 p-[15px_20px] rounded-[50%]"></p>
                            <div>
                                <p className="text-[16px] font-medium"> {el.timestamp}</p>
                                <p className="text-xs text-green-600">Balance - N30000</p>
                            </div>
                            <div className="ml-auto">
                                <p className={ el.id == 'I gave Out' ? "text-red-500 text-xl font-medium": "text-green-500 text-xl font-medium"}> ₦{el.amount}</p>
                                <p className="text-sm text-slate-600 text-right"> {el.id}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}